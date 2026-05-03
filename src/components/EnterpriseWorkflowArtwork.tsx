"use client";

import React from 'react';
import { Boxes, CircleDot, CreditCard, FileText, Landmark, Network, ShieldCheck, Smartphone, Users } from 'lucide-react';

interface EnterpriseWorkflowArtworkProps {
    variant?: 'card' | 'hero';
    showBadge?: boolean;
    showIconTile?: boolean;
    badgeLabel?: string;
    theme?: 'workflow' | 'finance' | 'crm' | 'mobile';
}

const themedRows = {
    workflow: [
        { label: 'Approvals', owner: 'Flow', status: 'Open' },
        { label: 'Documents', owner: 'Inbox', status: 'Review' },
        { label: 'Escalations', owner: 'QA', status: 'Hold' },
        { label: 'Follow-up', owner: 'Queue', status: 'Next' },
        { label: 'Attachments', owner: 'Audit', status: 'Ready' },
    ],
    finance: [
        { label: 'Invoices', owner: 'AR', status: 'Posted' },
        { label: 'Payables', owner: 'AP', status: 'Review' },
        { label: 'Journals', owner: 'GL', status: 'Draft' },
        { label: 'Aging', owner: 'Month', status: 'Track' },
        { label: 'Closing', owner: 'Period', status: 'Check' },
    ],
    crm: [
        { label: 'Donors', owner: 'CRM', status: 'Active' },
        { label: 'Sponsors', owner: 'Program', status: 'Linked' },
        { label: 'Recurring', owner: 'Payment', status: 'Due' },
        { label: 'Receipts', owner: 'Finance', status: 'Issued' },
        { label: 'Campaigns', owner: 'Insight', status: 'Track' },
    ],
    mobile: [
        { label: 'Receiving', owner: 'WMS', status: 'Queued' },
        { label: 'Picking', owner: 'Mobile', status: 'Ready' },
        { label: 'Inventory', owner: 'SQLite', status: 'Cached' },
        { label: 'Barcode', owner: 'Scanner', status: 'Scan' },
        { label: 'Sync Queue', owner: 'API', status: 'Online' },
    ],
} as const;

const EnterpriseWorkflowArtwork: React.FC<EnterpriseWorkflowArtworkProps> = ({
    variant = 'card',
    showBadge = false,
    showIconTile = false,
    badgeLabel = 'Enterprise',
    theme = 'workflow',
}) => {
    const isHero = variant === 'hero';
    const isFinance = theme === 'finance';
    const isCrm = theme === 'crm';
    const isMobile = theme === 'mobile';
    const rows = themedRows[theme];
    const panelTitle = isFinance ? 'finance hub' : isCrm ? 'donor hub' : isMobile ? 'mobile wms' : 'workflow hub';
    const panelKicker = isFinance ? 'period close' : isCrm ? 'giving cycle' : isMobile ? 'offline sync' : 'daily sync';
    const panelChip = isFinance ? 'ledger' : isCrm ? 'recurring gifts' : isMobile ? 'warehouse task' : 'approvals';
    const TileIcon = isFinance ? Landmark : isCrm ? Users : isMobile ? Smartphone : Network;
    const BottomIcon = isFinance ? FileText : isCrm ? CreditCard : Boxes;

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div
                className={`absolute inset-0 ${
                    isFinance
                        ? 'bg-[linear-gradient(135deg,rgba(3,10,24,0.98)_0%,rgba(7,22,36,0.92)_42%,rgba(3,11,23,0.98)_100%)]'
                        : isCrm
                            ? 'bg-[linear-gradient(135deg,rgba(3,9,22,0.98)_0%,rgba(8,30,31,0.92)_45%,rgba(4,10,23,0.98)_100%)]'
                            : isMobile
                                ? 'bg-[linear-gradient(135deg,rgba(3,9,25,0.98)_0%,rgba(9,24,42,0.92)_45%,rgba(3,8,20,0.98)_100%)]'
                        : 'bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(8,15,30,0.9)_40%,rgba(4,11,24,0.96)_100%)]'
                }`}
            />
            <div
                className={`absolute inset-0 ${
                    isFinance
                        ? 'bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_52%_78%,rgba(15,23,42,0.25),transparent_22%)]'
                        : isCrm
                            ? 'bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(45,212,191,0.12),transparent_24%),radial-gradient(circle_at_52%_78%,rgba(15,23,42,0.25),transparent_22%)]'
                            : isMobile
                                ? 'bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(99,102,241,0.12),transparent_24%),radial-gradient(circle_at_52%_78%,rgba(15,23,42,0.25),transparent_22%)]'
                        : 'bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.14),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(148,163,184,0.1),transparent_24%),radial-gradient(circle_at_52%_78%,rgba(15,23,42,0.25),transparent_22%)]'
                }`}
            />
            <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:120px_72px]" />

            <div className="absolute left-[8%] top-[12%] h-[78%] w-[56%] opacity-70">
                <div className="absolute left-[4%] top-[8%] h-[62%] w-[3px] rounded-full bg-slate-500/20" />
                <div className="absolute left-[18%] top-[2%] h-[80%] w-[3px] rounded-full bg-slate-500/15" />
                <div className="absolute left-[32%] top-[10%] h-[70%] w-[3px] rounded-full bg-slate-500/15" />
                <div className="absolute left-0 top-[24%] h-[3px] w-full rounded-full bg-slate-400/10" />
                <div className="absolute left-[10%] top-[48%] h-[3px] w-[88%] rounded-full bg-slate-400/10" />
                <div className="absolute left-[4%] top-[66%] h-[3px] w-[92%] rounded-full bg-slate-400/10" />
                <div className="absolute left-[14%] top-[56%] h-[18%] w-[26%] rounded-[22px] border border-slate-600/15 bg-slate-400/5 blur-[1px]" />
            </div>

            <div
                className={`absolute left-[16%] top-[52%] h-[2px] w-[58%] ${
                    isFinance
                        ? 'bg-gradient-to-r from-teal-300/0 via-teal-300/45 to-teal-300/0'
                        : isCrm
                            ? 'bg-gradient-to-r from-emerald-300/0 via-emerald-300/45 to-emerald-300/0'
                            : isMobile
                                ? 'bg-gradient-to-r from-sky-300/0 via-sky-300/45 to-sky-300/0'
                        : 'bg-gradient-to-r from-amber-300/0 via-amber-300/45 to-amber-300/0'
                }`}
            />
            <div
                className={`absolute left-[14%] top-[50%] h-6 w-6 rounded-full blur-md ${
                    isFinance ? 'bg-teal-200/15' : isCrm ? 'bg-emerald-200/15' : isMobile ? 'bg-sky-200/15' : 'bg-amber-200/15'
                }`}
            />
            <div className="absolute right-[28%] top-[14%] h-10 w-10 rounded-full bg-slate-200/10 blur-xl" />

            {showBadge && (
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-2xl border border-sky-300/20 bg-slate-950/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/90 shadow-[0_14px_34px_rgba(2,6,23,0.38)] backdrop-blur-md">
                    <CircleDot size={14} className="text-sky-300" />
                    {badgeLabel}
                </div>
            )}

            {showIconTile && (
                <div className="absolute bottom-6 left-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-slate-700/70 bg-slate-950/72 shadow-[0_18px_44px_rgba(2,6,23,0.42)] backdrop-blur-md">
                    <TileIcon size={32} className="text-emerald-300" strokeWidth={1.8} />
                </div>
            )}

            <div
                className={`absolute ${
                    isHero
                        ? 'right-[4%] top-[14%] h-[68%] w-[18%] min-w-[180px] rotate-[9deg]'
                        : 'right-[8%] top-[14%] h-[70%] w-[28%] rotate-[8deg]'
                }`}
            >
                <div className="absolute inset-0 rounded-[28px] border border-slate-600/45 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] shadow-[0_24px_70px_rgba(2,6,23,0.55)]" />
                <div className="absolute inset-[10px] rounded-[22px] border border-slate-700/60 bg-[linear-gradient(180deg,rgba(3,7,18,0.96),rgba(10,15,29,0.96))]" />
                <div className="absolute inset-x-[16px] top-[16px] rounded-[16px] border border-slate-700/60 bg-slate-950/95 px-3 py-2 text-[9px] text-slate-300">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="font-semibold tracking-[0.12em] text-slate-200">{panelTitle}</span>
                        <span className="text-slate-500">{panelKicker}</span>
                    </div>
                    <div className="mt-2 rounded-2xl border border-slate-800/80 bg-slate-900/65 px-2 py-1.5 text-[8px] text-slate-400">
                        {panelChip}
                    </div>
                </div>

                <div className="absolute inset-x-[16px] bottom-[18px] top-[86px] space-y-2 overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950/88 px-3 py-3">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="grid grid-cols-[minmax(0,1.2fr)_52px_36px] items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/62 px-2.5 py-2 text-[8px]"
                        >
                            <div className="flex items-center gap-2 text-slate-300">
                                <ShieldCheck size={9} className="shrink-0 text-sky-300" />
                                <span className="truncate">{row.label}</span>
                            </div>
                            <span className="truncate text-slate-500">{row.owner}</span>
                            <span className="truncate text-right text-slate-400">{row.status}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-[8%] left-[28%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-slate-950/52 text-emerald-300/70 blur-[0.2px]">
                <BottomIcon size={26} strokeWidth={1.8} />
            </div>
        </div>
    );
};

export default EnterpriseWorkflowArtwork;
