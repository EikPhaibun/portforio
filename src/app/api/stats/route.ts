import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const totalKey = 'visitor:total';
    const dailyKey = `visitor:daily:${today}`;

    // เพิ่มจำนวนผู้เข้าชม (Increment)
    // หมายเหตุ: ในการใช้งานจริงควรมีการป้องกันการนับซ้ำจาก IP เดิมในระยะเวลาสั้นๆ 
    // แต่เพื่อความง่ายจะนับทุกครั้งที่โหลดหน้าเว็บ
    const totalCount = await redis.incr(totalKey);
    const dailyCount = await redis.incr(dailyKey);

    // กำหนดวันหมดอายุของ Daily Key ให้หายไปหลังจาก 48 ชั่วโมง (กันเหนียว)
    await redis.expire(dailyKey, 172800);

    return NextResponse.json({
      today: dailyCount,
      total: totalCount
    });
  } catch (error) {
    console.error('Visitor counter error:', error);
    return NextResponse.json({ today: 0, total: 0 }, { status: 500 });
  }
}
