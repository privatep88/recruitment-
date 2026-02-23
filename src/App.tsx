import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SidebarLink = ({ to, icon, label, isActive }: { to: string, icon: string, label: string, isActive: boolean }) => {
    const baseClasses = "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all";
    const activeClasses = "bg-primary/10 text-primary";
    const inactiveClasses = "text-slate-600  hover:bg-slate-50 :bg-slate-800 hover:text-slate-900 :text-white";

    return (
        <Link to={to} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <span className="material-symbols-outlined">{icon}</span>
            {label}
        </Link>
    );
};

const Sidebar = () => {
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';
    const isCandidates = location.pathname === '/' || location.pathname === '/candidates';
    const isJobs = location.pathname === '/jobs';
    const isAnalytics = location.pathname === '/analytics';

    return (
        <aside className="w-64 bg-surface-light  border-l border-slate-200  flex flex-col h-screen fixed right-0 top-0 z-10 transition-colors duration-300">
            <div className="p-6 flex items-center gap-3 border-b border-slate-100 ">
                <div className="bg-gradient-to-br from-primary to-blue-600 aspect-square rounded-xl size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[24px]">stars</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-slate-900  text-base font-bold leading-tight tracking-tight">التوظيف التنفيذي</h1>
                    <p className="text-slate-500  text-xs font-medium">مدير الموارد البشرية</p>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
                <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">القائمة الرئيسية</p>
                <SidebarLink to="/" icon="groups" label="المرشحين" isActive={isCandidates} />
                <SidebarLink to="/dashboard" icon="dashboard" label="لوحة التحكم" isActive={isDashboard} />
                <SidebarLink to="/jobs" icon="work" label="الوظائف" isActive={isJobs} />
                <SidebarLink to="/analytics" icon="bar_chart" label="التحليلات" isActive={isAnalytics} />
                
                <div className="my-4 border-t border-slate-100 "></div>
                
                <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">الفلاتر</p>
                <div className="px-3 space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs text-slate-500  font-medium">الإدارة</label>
                        <select className="w-full bg-slate-50  border border-slate-200  rounded-lg text-sm px-2 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-slate-700 ">
                            <option>جميع الإدارات</option>
                            <option>الهندسة</option>
                            <option>المبيعات</option>
                            <option>التسويق</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-slate-500  font-medium">الوظيفة</label>
                        <select className="w-full bg-slate-50  border border-slate-200  rounded-lg text-sm px-2 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-slate-700 ">
                            <option>جميع الوظائف</option>
                            <option>نائب رئيس الهندسة</option>
                            <option>مدير المبيعات</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-slate-100 ">
                <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600  hover:bg-slate-50 :bg-slate-800 hover:text-slate-900 :text-white transition-all">
                    <span className="material-symbols-outlined">settings</span>
                    الإعدادات
                </Link>
                <div className="mt-4 flex items-center gap-3 px-3">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 ring-2 ring-slate-100 " style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLezr91BIKA2kZ10-6zBGy2cVEi1A-lFvtyoTJ2p4jnffbf3mqEDDlbNDSKiUBInmiC2SsEM-8C8pUbaQFz-fFq0JY0edfJODJS-GJZbFGbsOrn_kseqfJmqF0rE-4rxT7G26UWORYQsMsKX_gdf_7_R-57BsUM5FEWAH9gqHEbPxQIrMeHLWNuLXNu_oGsMYU84E0HMZHErc35HkQ6hmsIZeRzBzr9evDByO2SnQ24_XNEKA0N5nnlWCAyCV_w-CK17q9xtHPKHs")'}}></div>
                        <div className="absolute bottom-0 right-0 size-2.5 bg-success rounded-full border-2 border-white "></div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-900 ">أحمد صالح</p>
                        <p className="text-xs text-slate-500 ">رئيس التوظيف</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

// --- Screen 1: Dashboard ---

const StatCard = ({ icon, iconBg, iconColor, trend, trendValue, trendDir, label, value }: any) => (
    <div className="bg-white  rounded-xl p-5 border border-slate-200  shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-2 ${iconBg} rounded-lg`}>
                <span className={`material-symbols-outlined ${iconColor} text-[24px]`}>{icon}</span>
            </div>
            <span className="flex items-center text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full" dir="ltr">
                <span className="material-symbols-outlined text-[14px] mr-0.5">{trendDir}</span> {trendValue}
            </span>
        </div>
        <p className="text-slate-500  text-sm font-medium">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900  mt-1" dir="ltr">{value}</h3>
    </div>
);

const DashboardScreen = ({ candidates }: { candidates: any[] }) => {
    const totalCandidates = candidates.length;
    const completedCandidates = candidates.filter(c => c.status === "تم التعيين" || c.status === "تم إصدار إقامة وهوية").length;
    const rejectedCandidates = candidates.filter(c => c.status === "تم الرفض" || c.status === "مستبعد" || c.status === "رفض توقيع العقد").length;
    
    const completionRate = totalCandidates > 0 ? Math.round((completedCandidates / totalCandidates) * 100) : 0;
    const rejectionRate = totalCandidates > 0 ? Math.round((rejectedCandidates / totalCandidates) * 100) : 0;

    // Calculate average wait time
    const waitTimes = candidates.filter(c => c.days !== '-').map(c => parseInt(c.days, 10));
    const avgWaitTime = waitTimes.length > 0 ? Math.round(waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length) : 0;

    // Calculate SLA compliance (e.g., <= 14 days)
    const compliantCandidates = waitTimes.filter(days => days <= 14).length;
    const slaCompliance = waitTimes.length > 0 ? Math.round((compliantCandidates / waitTimes.length) * 100) : 0;

    // Calculate department distribution
    const deptCounts = candidates.reduce((acc: any, c) => {
        acc[c.dept] = (acc[c.dept] || 0) + 1;
        return acc;
    }, {});
    const maxDeptCount = Math.max(...Object.values(deptCounts) as number[], 1);
    const deptData = Object.entries(deptCounts).map(([label, val]: [string, any]) => ({
        label,
        val,
        height: `${Math.round((val / maxDeptCount) * 100)}%`,
        color: "bg-primary"
    })).slice(0, 5); // Top 5

    // Wait time distribution
    const wait0to7 = waitTimes.filter(d => d <= 7).length;
    const wait8to14 = waitTimes.filter(d => d > 7 && d <= 14).length;
    const waitOver14 = waitTimes.filter(d => d > 14).length;
    const totalWait = waitTimes.length || 1;

    const waitTimeData = [
        { label: "0-7 أيام", height: `${Math.round((wait0to7 / totalWait) * 100)}%`, val: `${Math.round((wait0to7 / totalWait) * 100)}%`, color: "bg-success" },
        { label: "8-14 يوم", height: `${Math.round((wait8to14 / totalWait) * 100)}%`, val: `${Math.round((wait8to14 / totalWait) * 100)}%`, color: "bg-warning" },
        { label: ">14 يوم", height: `${Math.round((waitOver14 / totalWait) * 100)}%`, val: `${Math.round((waitOver14 / totalWait) * 100)}%`, color: "bg-danger" },
    ];

    // Status distribution for pie chart
    const statusCounts = candidates.reduce((acc: any, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
    }, {});

    const mainStatuses = [
        "تم إصدار إقامة وهوية",
        "تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي",
        "في انتظار إلغاء الإقامة من قبل الموظفين",
        "جاري التقديم",
        "تم تقديم المعاملة للجوازات",
        "تم الرفض",
        "إلغاء تأشيرة",
        "مستبعد",
        "في انتظار الأوراق من إدارة المشروع",
        "رفض توقيع العقد"
    ];

    const funnelData = mainStatuses.map(status => {
        const count = statusCounts[status] || 0;
        let color = "bg-primary";
        if (status.includes('رفض') || status.includes('مستبعد') || status.includes('إلغاء')) color = "bg-red-500";
        else if (status.includes('إقامة') || status.includes('تعيين')) color = "bg-green-500";
        else if (status.includes('انتظار')) color = "bg-blue-500";
        else color = "bg-amber-500";
        
        return {
            label: status,
            count: `${count} مرشح`,
            width: `${Math.round((count / Math.max(totalCandidates, 1)) * 100)}%`,
            color: color
        };
    }).sort((a, b) => parseInt(b.count) - parseInt(a.count));

    // Simplified pie chart logic for demonstration
    const activeCount = candidates.filter(c => c.status === "جاري التقديم" || c.status === "تم تقديم المعاملة للجوازات").length;
    const reviewCount = candidates.filter(c => c.status === "في انتظار الأوراق من إدارة المشروع" || c.status === "في انتظار إلغاء الإقامة من قبل الموظفين").length;
    const pendingCount = candidates.filter(c => c.status === "تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي").length;
    const newCount = totalCandidates - activeCount - reviewCount - pendingCount;

    const activePct = Math.round((activeCount / Math.max(totalCandidates, 1)) * 100);
    const reviewPct = Math.round((reviewCount / Math.max(totalCandidates, 1)) * 100);
    const pendingPct = Math.round((pendingCount / Math.max(totalCandidates, 1)) * 100);
    const newPct = 100 - activePct - reviewPct - pendingPct;

    const pieGradient = `conic-gradient(#ec5b13 0% ${newPct}%, #10b981 ${newPct}% ${newPct + activePct}%, #f59e0b ${newPct + activePct}% ${newPct + activePct + reviewPct}%, #ef4444 ${newPct + activePct + reviewPct}% 100%)`;

    return (
        <div className="flex-1 mr-64 p-8 overflow-y-auto h-screen bg-background-light ">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900  tracking-tight">نظرة عامة تنفيذية</h2>
                        <p className="text-slate-500  mt-1 text-sm">رؤى في الوقت الفعلي حول مسار المرشحين التنفيذيين ومقاييس مستوى الخدمة.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white  border border-slate-200  rounded-lg text-sm font-medium text-slate-700  hover:bg-slate-50 :bg-slate-800 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                            آخر 30 يوم
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            إضافة مرشح
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <StatCard 
                        icon="group" iconBg="bg-orange-50 " iconColor="text-primary"
                        trendDir="trending_up" trendValue="5%"
                        label="إجمالي المرشحين" value={totalCandidates.toString()}
                    />
                    <StatCard 
                        icon="check_circle" iconBg="bg-indigo-50 " iconColor="text-indigo-600"
                        trendDir="trending_up" trendValue="2%"
                        label="نسبة الإنجاز %" value={`${completionRate}%`}
                    />
                    <StatCard 
                        icon="cancel" iconBg="bg-red-50 " iconColor="text-danger"
                        trendDir="arrow_downward" trendValue="1%"
                        label="نسبة الرفض %" value={`${rejectionRate}%`}
                    />
                    <StatCard 
                        icon="schedule" iconBg="bg-amber-50 " iconColor="text-warning"
                        trendDir="arrow_downward" trendValue="2 d"
                        label="متوسط مدة المعالجة" value={`${avgWaitTime} يوم`}
                    />
                    <StatCard 
                        icon="gavel" iconBg="bg-emerald-50 " iconColor="text-success"
                        trendDir="trending_up" trendValue="1%"
                        label="الالتزام بـ SLA" value={`${slaCompliance}%`}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Hiring Funnel */}
                    <div className="lg:col-span-2 bg-white  rounded-xl border border-slate-200  shadow-sm p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 ">قمع التوظيف</h3>
                                <p className="text-sm text-slate-500 ">معدلات التحويل عبر مراحل التوظيف</p>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 :text-slate-300">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col justify-center relative min-h-[240px]">
                            <div className="space-y-4">
                                {funnelData.map((item, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-slate-700 ">{item.label}</span>
                                            <span className="text-slate-500">{item.count}</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100  rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status Distribution Pie Chart */}
                    <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 ">توزيع الحالات</h3>
                                <p className="text-sm text-slate-500 ">حالة المرشح الحالية</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="relative size-48 rounded-full" style={{ background: pieGradient }}>
                                <div className="absolute inset-4 bg-white  rounded-full flex items-center justify-center flex-col">
                                    <span className="text-3xl font-bold text-slate-900 ">{totalCandidates}</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">الإجمالي</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-primary"></div><span className="text-sm text-slate-600 ">جديد ({newPct}%)</span></div>
                            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success"></div><span className="text-sm text-slate-600 ">نشط ({activePct}%)</span></div>
                            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-warning"></div><span className="text-sm text-slate-600 ">مراجعة ({reviewPct}%)</span></div>
                            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-danger"></div><span className="text-sm text-slate-600 ">معلق ({pendingPct}%)</span></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
                    {/* By Department Bar Chart */}
                    <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 ">حسب الإدارة</h3>
                                <p className="text-sm text-slate-500 ">الحجم عبر وحدات الأعمال</p>
                            </div>
                            <div className="text-success font-medium text-sm flex items-center bg-success/10 px-2 py-1 rounded" dir="ltr">
                                <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span> +8% YTD
                            </div>
                        </div>
                        <div className="h-48 flex items-end justify-between gap-4 px-2">
                            {deptData.length > 0 ? deptData.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full bg-orange-100  rounded-t-sm relative h-48 flex items-end group-hover:bg-orange-200 :bg-orange-900/40 transition-colors">
                                        <div className={`w-full ${item.color} rounded-t-sm`} style={{ height: item.height }}></div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{item.val}</div>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500  text-center">{item.label}</span>
                                </div>
                            )) : (
                                <div className="w-full text-center text-slate-500 mt-20">لا توجد بيانات</div>
                            )}
                        </div>
                    </div>

                    {/* Wait Time Analysis */}
                    <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 ">تحليل مدة الانتظار</h3>
                                <p className="text-sm text-slate-500 ">الإجراءات المعلقة حسب المدة</p>
                            </div>
                            <div className="text-danger font-medium text-sm flex items-center bg-danger/10 px-2 py-1 rounded">
                                <span className="material-symbols-outlined text-[16px] ml-1">warning</span> 12 حالة حرجة
                            </div>
                        </div>
                        <div className="h-48 flex items-end justify-around gap-8 px-8">
                            {waitTimeData.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full max-w-[80px] bg-slate-100  rounded-t-md relative h-48 flex items-end">
                                        <div className={`w-full ${item.color} rounded-t-md transition-all duration-500 hover:opacity-80`} style={{ height: item.height }}></div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{item.val}</div>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-500  text-center" dir="ltr">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Screen 3: Jobs Dashboard ---
const JobsScreen = ({ candidates }: { candidates: any[] }) => {
    const mainStatuses = [
        "تم إصدار إقامة وهوية",
        "تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي",
        "في انتظار إلغاء الإقامة من قبل الموظفين",
        "جاري التقديم",
        "تم تقديم المعاملة للجوازات",
        "تم الرفض",
        "إلغاء تأشيرة",
        "مستبعد",
        "في انتظار الأوراق من إدارة المشروع",
        "رفض توقيع العقد"
    ];

    const statusCounts = candidates.reduce((acc: any, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
    }, {});

    const chartData = mainStatuses.map(status => ({
        name: status,
        عدد: statusCounts[status] || 0
    }));

    const COLORS = ['#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7'];

    return (
        <div className="flex-1 mr-64 p-8 overflow-y-auto h-screen bg-background-light">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">لوحة معلومات الوظائف</h2>
                        <p className="text-slate-500 mt-1 text-sm">نظرة عامة على حالة المرشحين وتوزيعهم.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bar Chart */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">توزيع المرشحين حسب الحالة</h3>
                        <div className="w-full h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={false} axisLine={false} />
                                    <YAxis />
                                    <Tooltip cursor={{fill: 'transparent'}} />
                                    <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingRight: '20px', fontSize: '12px' }} />
                                    <Bar dataKey="عدد" barSize={30}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">نسبة الحالات</h3>
                        <div className="w-full h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="40%"
                                        cy="50%"
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="عدد"
                                        stroke="none"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingRight: '20px', fontSize: '12px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Screen 4: Analytics ---
const AnalyticsScreen = ({ candidates }: { candidates: any[] }) => {
    // 1. Time to Process (متوسط مدة المعالجة)
    // Average days from application to closure (hired/rejected)
    const closedCandidates = candidates.filter(c => 
        c.status.includes('تعيين') || c.status.includes('رفض') || c.status.includes('مستبعد') || c.status.includes('إلغاء') || c.status.includes('إقامة')
    );
    const avgDaysToClose = closedCandidates.length > 0 
        ? Math.round(closedCandidates.reduce((acc, c) => acc + (parseInt(c.days) || 0), 0) / closedCandidates.length)
        : 0;

    // Average duration per stage
    const statusDays = candidates.reduce((acc: any, c) => {
        if (!acc[c.status]) acc[c.status] = { total: 0, count: 0 };
        acc[c.status].total += parseInt(c.days) || 0;
        acc[c.status].count += 1;
        return acc;
    }, {});

    const avgDaysPerStatus = Object.entries(statusDays).map(([status, data]: [string, any]) => ({
        status,
        avgDays: Math.round(data.total / data.count)
    })).sort((a, b) => b.avgDays - a.avgDays);

    const slowestStatus = avgDaysPerStatus.length > 0 ? avgDaysPerStatus[0] : null;
    const fastestStatus = avgDaysPerStatus.length > 0 ? avgDaysPerStatus[avgDaysPerStatus.length - 1] : null;

    // 2. Bottleneck Analysis (تحليل الاختناقات)
    // Status with highest waiting count
    const activeCandidates = candidates.filter(c => 
        !c.status.includes('تعيين') && !c.status.includes('رفض') && !c.status.includes('مستبعد') && !c.status.includes('إلغاء') && !c.status.includes('إقامة')
    );
    
    const activeStatusCounts = activeCandidates.reduce((acc: any, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
    }, {});

    const bottleneckStatus = Object.entries(activeStatusCounts).sort((a: any, b: any) => b[1] - a[1])[0];

    // Percentage of candidates stuck in each stage
    const totalActive = activeCandidates.length;
    const stuckPercentages = Object.entries(activeStatusCounts).map(([status, count]: [string, any]) => ({
        status,
        count,
        percentage: totalActive > 0 ? Math.round((count / totalActive) * 100) : 0
    })).sort((a, b) => b.percentage - a.percentage);

    // 3. Delayed Cases Analysis (تحليل الحالات المتأخرة)
    const delayedCandidates = activeCandidates.filter(c => (parseInt(c.days) || 0) > 14);
    const severelyDelayedCandidates = activeCandidates.filter(c => (parseInt(c.days) || 0) > 30);

    // 4. Additional useful analytics:
    // Acceptance/Rejection Rate
    const hiredCount = candidates.filter(c => c.status.includes('تعيين') || c.status.includes('إقامة')).length;
    const rejectedCount = candidates.filter(c => c.status.includes('رفض') || c.status.includes('مستبعد') || c.status.includes('إلغاء')).length;
    const totalClosed = hiredCount + rejectedCount;
    const acceptanceRate = totalClosed > 0 ? Math.round((hiredCount / totalClosed) * 100) : 0;

    // Department performance
    const deptDays = closedCandidates.reduce((acc: any, c) => {
        if (!acc[c.dept]) acc[c.dept] = { total: 0, count: 0 };
        acc[c.dept].total += parseInt(c.days) || 0;
        acc[c.dept].count += 1;
        return acc;
    }, {});

    const avgDaysPerDept = Object.entries(deptDays).map(([dept, data]: [string, any]) => ({
        dept,
        avgDays: Math.round(data.total / data.count)
    })).sort((a, b) => a.avgDays - b.avgDays);

    return (
        <div className="flex-1 mr-64 p-8 overflow-y-auto h-screen bg-background-light">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">التحليلات المتقدمة</h2>
                        <p className="text-slate-500 mt-1 text-sm">رؤى تفصيلية حول أداء التوظيف والاختناقات.</p>
                    </div>
                </div>

                {/* 1. Time to Process */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">schedule</span>
                        تحليل مدة المعالجة (Time to Process)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p className="text-sm text-slate-500 mb-1">متوسط الإغلاق</p>
                            <p className="text-2xl font-bold text-slate-900">{avgDaysToClose} <span className="text-sm font-normal text-slate-500">يوم</span></p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                            <p className="text-sm text-green-600 mb-1">أسرع حالة</p>
                            <p className="text-lg font-bold text-green-700 line-clamp-1" title={fastestStatus?.status}>{fastestStatus?.status || '-'}</p>
                            <p className="text-sm text-green-600 mt-1">{fastestStatus?.avgDays || 0} يوم متوسط</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                            <p className="text-sm text-red-600 mb-1">أبطأ حالة</p>
                            <p className="text-lg font-bold text-red-700 line-clamp-1" title={slowestStatus?.status}>{slowestStatus?.status || '-'}</p>
                            <p className="text-sm text-red-600 mt-1">{slowestStatus?.avgDays || 0} يوم متوسط</p>
                        </div>
                    </div>
                    
                    <h4 className="text-sm font-bold text-slate-700 mb-3">متوسط مدة كل مرحلة</h4>
                    <div className="space-y-3">
                        {avgDaysPerStatus.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-48 text-sm text-slate-600 truncate" title={stat.status}>{stat.status}</div>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary rounded-full" 
                                        style={{ width: `${Math.min((stat.avgDays / (slowestStatus?.avgDays || 1)) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <div className="w-16 text-left text-sm font-medium text-slate-700" dir="ltr">{stat.avgDays} يوم</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 2. Bottleneck Analysis */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-500">warning</span>
                            تحليل الاختناقات (Bottlenecks)
                        </h3>
                        
                        <div className="mb-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <p className="text-sm text-amber-700 mb-1">أعلى انتظار حالياً</p>
                            <p className="text-lg font-bold text-amber-800">{bottleneckStatus ? bottleneckStatus[0] : '-'}</p>
                            <p className="text-sm text-amber-700 mt-1">{bottleneckStatus ? bottleneckStatus[1] : 0} مرشح عالق</p>
                        </div>

                        <h4 className="text-sm font-bold text-slate-700 mb-3">نسبة المرشحين العالقين</h4>
                        <div className="space-y-4">
                            {stuckPercentages.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-600 truncate pr-2" title={stat.status}>{stat.status}</span>
                                        <span className="font-medium text-slate-900">{stat.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full ${idx === 0 ? 'bg-amber-500' : 'bg-slate-400'}`}
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* 3. Delayed Cases */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500">timer</span>
                                تحليل الحالات المتأخرة
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                                    <p className="text-3xl font-bold text-red-600 mb-1">{delayedCandidates.length}</p>
                                    <p className="text-sm text-red-800">متأخر (&gt; 14 يوم)</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 text-center">
                                    <p className="text-3xl font-bold text-rose-600 mb-1">{severelyDelayedCandidates.length}</p>
                                    <p className="text-sm text-rose-800">شديد التأخير (&gt; 30 يوم)</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Additional Analytics */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-500">insights</span>
                                تحليلات إضافية
                            </h3>
                            
                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600">معدل القبول (Acceptance Rate)</span>
                                    <span className="font-bold text-slate-900">{acceptanceRate}%</span>
                                </div>
                                <div className="h-2 bg-red-100 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-green-500" style={{ width: `${acceptanceRate}%` }}></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>{hiredCount} قبول</span>
                                    <span>{rejectedCount} رفض</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-700 mb-3">أسرع الإدارات في الإغلاق</h4>
                                <div className="space-y-2">
                                    {avgDaysPerDept.map((dept, idx) => (
                                        <div key={idx} className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                                            <span className="text-sm font-medium text-slate-700">{dept.dept || 'غير محدد'}</span>
                                            <span className="text-sm text-slate-500" dir="ltr">{dept.avgDays} يوم</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Screen 2: Candidate Management ---

const AddCandidateModal = ({ isOpen, onClose, initialData, onSave }: { isOpen: boolean, onClose: () => void, initialData?: any, onSave: (data: any) => void }) => {
    const [formData, setFormData] = useState({
        id: '',
        fullName: '',
        jobTitle: '',
        department: '',
        applicationDate: new Date().toISOString().split('T')[0],
        status: '',
        lastUpdate: new Date().toISOString().split('T')[0],
        notes: ''
    });

    React.useEffect(() => {
        if (initialData) {
            setFormData({
                id: initialData.id || '',
                fullName: initialData.name || '',
                jobTitle: initialData.role || '',
                department: initialData.dept || '',
                applicationDate: initialData.applicationDate || new Date().toISOString().split('T')[0],
                status: initialData.status || '',
                lastUpdate: initialData.updated === 'اليوم' ? new Date().toISOString().split('T')[0] : (initialData.updated || new Date().toISOString().split('T')[0]),
                notes: initialData.notes || ''
            });
        } else {
            setFormData({
                id: '',
                fullName: '',
                jobTitle: '',
                department: '',
                applicationDate: new Date().toISOString().split('T')[0],
                status: '',
                lastUpdate: new Date().toISOString().split('T')[0],
                notes: ''
            });
        }
    }, [initialData, isOpen]);

    // Calculate wait time and performance
    const calculateMetrics = () => {
        if (!formData.applicationDate) return { waitTime: 0, performance: 'غير محدد' };
        
        const start = new Date(formData.applicationDate);
        const end = formData.lastUpdate ? new Date(formData.lastUpdate) : new Date();
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        
        let performance = 'سريع'; // < 7 days
        if (diffDays > 7 && diffDays <= 14) performance = 'متوسط';
        else if (diffDays > 14) performance = 'متأخر';

        return { waitTime: diffDays, performance };
    };

    const metrics = calculateMetrics();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" style={{fontFamily: 'Cairo, sans-serif'}}>
            <div className="bg-white  rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-slate-100  flex justify-between items-center sticky top-0 bg-white  z-10">
                    <h3 className="text-xl font-bold text-slate-900 ">{initialData ? 'تعديل بيانات المرشح' : 'إضافة مرشح جديد'}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 :text-slate-200">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">رقم المرشح (ID)</label>
                            <input type="text" name="id" value={formData.id} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " placeholder="مثال: C-2024" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">الاسم الكامل</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">الوظيفة</label>
                            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">الإدارة</label>
                            <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">تاريخ التقديم</label>
                            <input type="date" name="applicationDate" value={formData.applicationDate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ">تاريخ آخر تحديث</label>
                            <input type="date" name="lastUpdate" value={formData.lastUpdate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  " />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                            <label className="text-sm font-medium text-slate-700 ">الحالة الرئيسية</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  ">
                                <option value="">اختر الحالة...</option>
                                <option value="تم إصدار إقامة وهوية">تم إصدار إقامة وهوية</option>
                                <option value="تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي">تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي</option>
                                <option value="في انتظار إلغاء الإقامة من قبل الموظفين">في انتظار إلغاء الإقامة من قبل الموظفين</option>
                                <option value="جاري التقديم">جاري التقديم</option>
                                <option value="تم تقديم المعاملة للجوازات">تم تقديم المعاملة للجوازات</option>
                                <option value="تم الرفض">تم الرفض</option>
                                <option value="إلغاء تأشيرة">إلغاء تأشيرة</option>
                                <option value="مستبعد">مستبعد</option>
                                <option value="في انتظار الأوراق من إدارة المشروع">في انتظار الأوراق من إدارة المشروع</option>
                                <option value="رفض توقيع العقد">رفض توقيع العقد</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-slate-50  p-4 rounded-lg">
                        <div>
                            <span className="text-xs text-slate-500 block mb-1">مدة الانتظار (تلقائي)</span>
                            <span className="font-bold text-slate-900 ">{metrics.waitTime} يوم</span>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500 block mb-1">تصنيف الأداء</span>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                                ${metrics.performance === 'سريع' ? 'bg-green-100 text-green-800' : 
                                  metrics.performance === 'متوسط' ? 'bg-yellow-100 text-yellow-800' : 
                                  metrics.performance === 'متأخر' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                {metrics.performance}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ">ملاحظات</label>
                        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-slate-300  rounded-lg focus:ring-2 focus:ring-primary focus:border-primary  "></textarea>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100  flex justify-end gap-3 bg-slate-50  rounded-b-2xl">
                    <button onClick={onClose} className="px-4 py-2 text-slate-700  font-medium hover:bg-slate-200 :bg-slate-700 rounded-lg transition-colors">إلغاء</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">حفظ المرشح</button>
                </div>
            </div>
        </div>
    );
};

const ViewCandidateModal = ({ isOpen, onClose, candidate }: { isOpen: boolean, onClose: () => void, candidate: any }) => {
    if (!isOpen || !candidate) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" style={{fontFamily: 'Cairo, sans-serif'}}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-slate-900">تفاصيل المرشح</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className={`h-16 w-16 rounded-full ${candidate.initialsBg} flex items-center justify-center text-2xl font-bold ${candidate.initialsColor}`}>
                            {candidate.initials}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900">{candidate.name}</h4>
                            <p className="text-slate-500">{candidate.role} - {candidate.dept}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">رقم المرشح</span>
                            <span className="font-medium text-slate-900" dir="ltr">{candidate.id}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">الحالة</span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${candidate.statusBg} ${candidate.statusColor} border border-opacity-20`}>
                                {candidate.status}
                            </span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">آخر تحديث</span>
                            <span className="font-medium text-slate-900">{candidate.updated}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">تاريخ التقديم</span>
                            <span className="font-medium text-slate-900">{candidate.applicationDate}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">أيام الانتظار</span>
                            <span className="font-medium text-slate-900">{candidate.days} أيام</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50 rounded-b-2xl">
                    <button onClick={onClose} className="px-4 py-2 text-slate-700 font-medium hover:bg-slate-200 rounded-lg transition-colors">إغلاق</button>
                </div>
            </div>
        </div>
    );
};

const CandidateRow = ({ id, initials, initialsBg, initialsColor, name, role, dept, status, statusColor, statusBg, updated, applicationDate, days, daysColor, onView, onEdit }: any) => (
    <tr className="hover:bg-slate-50 :bg-slate-800/50 transition-colors group border-b border-slate-100  last:border-0">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 " dir="ltr">{id}</td>
        <td className="px-6 py-4 min-w-[200px] max-w-[250px]">
            <div className="flex items-center">
                <div className={`h-8 w-8 rounded-full ${initialsBg} flex items-center justify-center text-xs font-bold ${initialsColor} ml-3 shrink-0`}>
                    {initials}
                </div>
                <div className="text-sm font-medium text-slate-900 whitespace-normal break-words">{name}</div>
            </div>
        </td>
        <td className="px-6 py-4 min-w-[200px] max-w-[250px]">
            <div className="text-sm text-slate-900 whitespace-normal break-words">{role}</div>
            <div className="text-xs text-slate-500 whitespace-normal break-words">{dept}</div>
        </td>
        <td className="px-6 py-4 min-w-[180px] max-w-[220px]">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusBg} ${statusColor} border border-opacity-20 whitespace-normal break-words text-center leading-relaxed`}>
                {status}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 ">{applicationDate}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 ">{updated}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center">
            <div className="flex items-center justify-center gap-1.5">
                <span className={`text-sm font-medium ${daysColor === 'text-red-600' ? 'text-red-600' : 'text-slate-900 '}`}>{days}</span>
                {days !== '-' && <span className={`material-symbols-outlined text-[10px] ${daysColor === 'text-red-600' ? 'text-red-500' : days > 3 ? 'text-amber-500' : 'text-green-500'}`}>circle</span>}
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
            <div className="flex justify-end gap-2 pl-2">
                <button onClick={() => onView({ id, initials, initialsBg, initialsColor, name, role, dept, status, statusColor, statusBg, updated, applicationDate, days, daysColor })} className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
                <button onClick={() => onEdit({ id, initials, initialsBg, initialsColor, name, role, dept, status, statusColor, statusBg, updated, applicationDate, days, daysColor })} className={`text-slate-400 hover:text-primary transition-colors ${days === '-' ? 'cursor-not-allowed opacity-50' : ''}`} disabled={days === '-'}>
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
            </div>
        </td>
    </tr>
);

const initialCandidates = [
    {
        id: "#C-2049", initials: "JD", initialsBg: "bg-slate-200", initialsColor: "text-slate-600",
        name: "جين دو", role: "مدير منتج أول", dept: "المنتجات",
        status: "تم إصدار إقامة وهوية", statusBg: "bg-green-100", statusColor: "text-green-800",
        updated: "24 أكتوبر 2023", applicationDate: "22 أكتوبر 2023", days: "2", daysColor: "text-slate-900"
    },
    {
        id: "#C-2055", initials: "MS", initialsBg: "bg-blue-100", initialsColor: "text-blue-600",
        name: "مايكل سكوت", role: "مدير إقليمي", dept: "المبيعات",
        status: "جاري التقديم", statusBg: "bg-amber-100", statusColor: "text-amber-800",
        updated: "22 أكتوبر 2023", applicationDate: "17 أكتوبر 2023", days: "5", daysColor: "text-slate-900"
    },
    {
        id: "#C-1982", initials: "AB", initialsBg: "bg-slate-200", initialsColor: "text-slate-600",
        name: "أليس بروكس", role: "مصمم تجربة مستخدم", dept: "التصميم",
        status: "في انتظار الأوراق من إدارة المشروع", statusBg: "bg-blue-100", statusColor: "text-blue-800",
        updated: "15 أكتوبر 2023", applicationDate: "03 أكتوبر 2023", days: "12", daysColor: "text-red-600"
    },
    {
        id: "#C-2010", initials: "RK", initialsBg: "bg-slate-200", initialsColor: "text-slate-600",
        name: "روبرت كينغ", role: "مهندس برمجيات", dept: "الهندسة",
        status: "تم الرفض", statusBg: "bg-red-100", statusColor: "text-red-800",
        updated: "10 أكتوبر 2023", applicationDate: "01 أكتوبر 2023", days: "-", daysColor: "text-slate-400"
    },
    {
        id: "#C-2060", initials: "EL", initialsBg: "bg-purple-100", initialsColor: "text-purple-600",
        name: "إيلينا لوبيز", role: "رئيسة التسويق", dept: "التسويق",
        status: "جاري التقديم", statusBg: "bg-amber-100", statusColor: "text-amber-800",
        updated: "اليوم", applicationDate: "اليوم", days: "0", daysColor: "text-slate-900"
    }
];

const CandidateScreen = ({ candidates, setCandidates }: { candidates: any[], setCandidates: React.Dispatch<React.SetStateAction<any[]>> }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("الكل");
    const [deptFilter, setDeptFilter] = useState("الكل");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 200;

    const handleView = (candidate: any) => {
        setSelectedCandidate(candidate);
        setIsViewModalOpen(true);
    };

    const handleEdit = (candidate: any) => {
        setSelectedCandidate(candidate);
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
        setSelectedCandidate(null);
    };

    const mainStatuses = [
        "تم إصدار إقامة وهوية",
        "تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي",
        "في انتظار إلغاء الإقامة من قبل الموظفين",
        "جاري التقديم",
        "تم تقديم المعاملة للجوازات",
        "تم الرفض",
        "إلغاء تأشيرة",
        "مستبعد",
        "في انتظار الأوراق من إدارة المشروع",
        "رفض توقيع العقد"
    ];

    const statusCounts = candidates.reduce((acc: any, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
    }, {});

    const handleSaveCandidate = (formData: any) => {
        const getStatusColor = (status: string) => {
            if (status.includes('رفض') || status.includes('مستبعد') || status.includes('إلغاء')) return { bg: 'bg-red-100', text: 'text-red-800' };
            if (status.includes('إقامة') || status.includes('تعيين')) return { bg: 'bg-green-100', text: 'text-green-800' };
            if (status.includes('انتظار')) return { bg: 'bg-blue-100', text: 'text-blue-800' };
            return { bg: 'bg-amber-100', text: 'text-amber-800' };
        };

        const colors = getStatusColor(formData.status);
        
        const start = new Date(formData.applicationDate);
        const end = formData.lastUpdate ? new Date(formData.lastUpdate) : new Date();
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        const newCandidate = {
            id: formData.id || `#C-${Math.floor(Math.random() * 9000) + 1000}`,
            initials: formData.fullName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() || 'NA',
            initialsBg: "bg-slate-200",
            initialsColor: "text-slate-600",
            name: formData.fullName,
            role: formData.jobTitle,
            dept: formData.department,
            status: formData.status,
            statusBg: colors.bg,
            statusColor: colors.text,
            updated: formData.lastUpdate,
            applicationDate: formData.applicationDate,
            days: diffDays.toString(),
            daysColor: diffDays > 14 ? 'text-red-600' : 'text-slate-900',
            notes: formData.notes
        };

        if (selectedCandidate) {
            setCandidates(prev => prev.map(c => c.id === selectedCandidate.id ? { ...c, ...newCandidate, id: selectedCandidate.id } : c));
        } else {
            setCandidates(prev => [newCandidate, ...prev]);
        }
    };

    const filteredCandidates = candidates.filter(candidate => {
        const matchesSearch = candidate.name.includes(searchQuery) || candidate.id.includes(searchQuery) || candidate.role.includes(searchQuery);
        const matchesStatus = statusFilter === "الكل" || candidate.status === statusFilter;
        const matchesDept = deptFilter === "الكل" || candidate.dept === deptFilter;
        return matchesSearch && matchesStatus && matchesDept;
    });

    const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCandidates = filteredCandidates.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleExportCSV = () => {
        if (filteredCandidates.length === 0) {
            alert("لا توجد بيانات لتصديرها");
            return;
        }

        const headers = [
            "رقم المرشح",
            "الاسم الكامل",
            "الوظيفة",
            "الإدارة",
            "الحالة",
            "تاريخ التقديم",
            "آخر تحديث",
            "أيام الانتظار",
            "ملاحظات"
        ];

        const csvContent = [
            headers.join(","),
            ...filteredCandidates.map(c => [
                c.id,
                `"${c.name}"`,
                `"${c.role}"`,
                `"${c.dept}"`,
                `"${c.status}"`,
                c.applicationDate,
                c.updated,
                c.days,
                `"${c.notes || ''}"`
            ].join(","))
        ].join("\n");

        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `candidates_export_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result as string;
            // Remove BOM if present
            const cleanText = text.replace(/^\uFEFF/, '');
            
            // Simple CSV parser (doesn't handle commas inside quotes perfectly, but good enough for basic use)
            const rows = cleanText.split('\n').filter(row => row.trim() !== '');
            if (rows.length <= 1) return; // Only headers or empty

            const newCandidates = rows.slice(1).map(row => {
                // Regex to split by comma, respecting quotes
                const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                const values = matches ? matches.map(val => val.replace(/^"|"$/g, '').trim()) : row.split(',').map(v => v.trim());
                
                if (values.length < 8) return null;

                const [id, name, role, dept, status, applicationDate, updated, days, notes] = values;

                const getStatusColor = (statusText: string) => {
                    if (statusText.includes('رفض') || statusText.includes('مستبعد') || statusText.includes('إلغاء')) return { bg: 'bg-red-100', text: 'text-red-800' };
                    if (statusText.includes('إقامة') || statusText.includes('تعيين')) return { bg: 'bg-green-100', text: 'text-green-800' };
                    if (statusText.includes('انتظار')) return { bg: 'bg-blue-100', text: 'text-blue-800' };
                    return { bg: 'bg-amber-100', text: 'text-amber-800' };
                };

                const colors = getStatusColor(status || '');
                const parsedDays = parseInt(days) || 0;

                return {
                    id: id || `#C-${Math.floor(Math.random() * 9000) + 1000}`,
                    initials: name ? name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() : 'NA',
                    initialsBg: "bg-slate-200",
                    initialsColor: "text-slate-600",
                    name: name || 'بدون اسم',
                    role: role || '',
                    dept: dept || '',
                    status: status || 'جاري التقديم',
                    statusBg: colors.bg,
                    statusColor: colors.text,
                    updated: updated || new Date().toISOString().split('T')[0],
                    applicationDate: applicationDate || new Date().toISOString().split('T')[0],
                    days: days || '0',
                    daysColor: parsedDays > 14 ? 'text-red-600' : 'text-slate-900',
                    notes: notes || ''
                };
            }).filter(Boolean) as any[];

            if (newCandidates.length > 0) {
                setCandidates(prev => [...newCandidates, ...prev]);
                alert(`تم استيراد ${newCandidates.length} مرشح بنجاح`);
            }
        };
        reader.readAsText(file);
        // Reset input so the same file can be selected again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background-light  mr-64 font-display">
            <AddCandidateModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} initialData={selectedCandidate} onSave={handleSaveCandidate} />
            <ViewCandidateModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} candidate={selectedCandidate} />
            
            {/* Header */}
            <header className="bg-white  border-b border-slate-200  px-8 py-5 flex items-center justify-between shrink-0">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500  mb-1">
                        <span>الرئيسية</span>
                        <span className="material-symbols-outlined text-[16px] transform rotate-180">chevron_right</span>
                        <span className="text-primary font-medium">جميع المرشحين</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900  tracking-tight">إدارة بيانات المرشحين</h2>
                </div>
                <div className="flex items-center gap-3">
                    <input 
                        type="file" 
                        accept=".csv" 
                        ref={fileInputRef} 
                        onChange={handleImportCSV} 
                        className="hidden" 
                    />
                    <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 border border-slate-200  rounded-lg text-sm font-medium text-slate-700  bg-white  hover:bg-slate-50 :bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">upload</span>
                        استيراد CSV
                    </button>
                    <button onClick={handleExportCSV} className="flex items-center gap-2 px-4 py-2 border border-slate-200  rounded-lg text-sm font-medium text-slate-700  bg-white  hover:bg-slate-50 :bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        تصدير CSV
                    </button>
                    <button 
                        onClick={() => { setSelectedCandidate(null); setIsAddModalOpen(true); }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm shadow-primary/30">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        إضافة مرشح
                    </button>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
                    <div className="bg-white  p-4 rounded-xl border border-slate-200  shadow-sm flex flex-col justify-between">
                        <div className="flex items-start justify-between mb-2 gap-2">
                            <span className="text-slate-500  text-xs font-medium leading-tight">إجمالي المرشحين</span>
                            <span className="p-1.5 bg-blue-50  text-blue-600  rounded-md material-symbols-outlined text-[18px] shrink-0">groups</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-slate-900 ">{candidates.length.toLocaleString()}</span>
                        </div>
                    </div>
                    {mainStatuses.map((status) => {
                        const count = statusCounts[status] || 0;
                        let icon = "info";
                        let colorClass = "bg-slate-50 text-slate-600";
                        
                        if (status.includes('رفض') || status.includes('مستبعد') || status.includes('إلغاء')) {
                            icon = "cancel";
                            colorClass = "bg-red-50 text-red-600";
                        } else if (status.includes('إقامة') || status.includes('تعيين')) {
                            icon = "check_circle";
                            colorClass = "bg-green-50 text-green-600";
                        } else if (status.includes('انتظار')) {
                            icon = "schedule";
                            colorClass = "bg-blue-50 text-blue-600";
                        } else {
                            icon = "pending_actions";
                            colorClass = "bg-amber-50 text-amber-600";
                        }

                        return (
                            <div key={status} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                                <div className="flex items-start justify-between mb-2 gap-2">
                                    <span className="text-slate-500 text-xs font-medium leading-tight line-clamp-2" title={status}>{status}</span>
                                    <span className={`p-1.5 rounded-md material-symbols-outlined text-[18px] shrink-0 ${colorClass}`}>{icon}</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-slate-900">{count}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Filters */}
                <div className="bg-white  rounded-xl border border-slate-200  shadow-sm mb-6">
                    <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                            </div>
                            <input 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pr-10 pl-3 py-2.5 border border-slate-200  rounded-lg leading-5 bg-white  placeholder-slate-400 text-slate-900  focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" 
                                placeholder="ابحث بالاسم، الرقم، أو المسمى الوظيفي..." 
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
                            <select 
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            >
                                <option value="الكل">الحالة: الكل</option>
                                <option value="تم إصدار إقامة وهوية">تم إصدار إقامة وهوية</option>
                                <option value="تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي">تم إصدار التأشيرة وفي انتظار نتيجة الكشف الطبي</option>
                                <option value="في انتظار إلغاء الإقامة من قبل الموظفين">في انتظار إلغاء الإقامة من قبل الموظفين</option>
                                <option value="جاري التقديم">جاري التقديم</option>
                                <option value="تم تقديم المعاملة للجوازات">تم تقديم المعاملة للجوازات</option>
                                <option value="تم الرفض">تم الرفض</option>
                                <option value="إلغاء تأشيرة">إلغاء تأشيرة</option>
                                <option value="مستبعد">مستبعد</option>
                                <option value="في انتظار الأوراق من إدارة المشروع">في انتظار الأوراق من إدارة المشروع</option>
                                <option value="رفض توقيع العقد">رفض توقيع العقد</option>
                            </select>
                            <select 
                                value={deptFilter}
                                onChange={(e) => setDeptFilter(e.target.value)}
                                className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            >
                                <option value="الكل">القسم: الكل</option>
                                <option value="المنتجات">المنتجات</option>
                                <option value="المبيعات">المبيعات</option>
                                <option value="التصميم">التصميم</option>
                                <option value="الهندسة">الهندسة</option>
                                <option value="التسويق">التسويق</option>
                            </select>
                            <div className="h-6 w-px bg-slate-200  mx-1"></div>
                            <button 
                                onClick={() => { setSearchQuery(""); setStatusFilter("الكل"); setDeptFilter("الكل"); setCurrentPage(1); }}
                                className="flex items-center justify-center size-9 border border-slate-200  rounded-lg text-slate-500 hover:bg-slate-50 :bg-slate-800 hover:text-primary transition-colors" title="إعادة ضبط الفرز"
                            >
                                <span className="material-symbols-outlined text-[20px]">refresh</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200  text-right table-fixed">
                            <thead className="bg-slate-50 ">
                                <tr>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[120px]">رقم المرشح</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[200px]">الاسم الكامل</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[200px]">الوظيفة / الإدارة</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[180px]">الحالة</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[120px]">تاريخ التقديم</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500  uppercase tracking-wider w-[120px]">آخر تحديث</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500  uppercase tracking-wider w-[100px]">أيام الانتظار</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500  uppercase tracking-wider w-[100px]">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white  divide-y divide-slate-200 ">
                                {paginatedCandidates.length > 0 ? (
                                    paginatedCandidates.map((candidate, index) => (
                                        <CandidateRow 
                                            key={index}
                                            {...candidate}
                                            onView={handleView} onEdit={handleEdit}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                                            لا توجد نتائج مطابقة للبحث والفرز الحالي.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination */}
                    <div className="bg-white  px-4 py-3 border-t border-slate-200  flex items-center justify-between sm:px-6">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-slate-700 ">
                                    عرض <span className="font-medium">{filteredCandidates.length > 0 ? startIndex + 1 : 0}</span> إلى <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredCandidates.length)}</span> من <span className="font-medium">{filteredCandidates.length}</span> نتيجة
                                </p>
                            </div>
                            {totalPages > 1 && (
                                <div>
                                    <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" dir="ltr">
                                        <button 
                                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300  bg-white  text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                        </button>
                                        
                                        {Array.from({ length: totalPages }).map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handlePageChange(idx + 1)}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                    currentPage === idx + 1 
                                                        ? 'z-10 bg-primary/10 border-primary text-primary' 
                                                        : 'bg-white border-slate-300 text-slate-500 hover:bg-slate-50'
                                                }`}
                                            >
                                                {idx + 1}
                                            </button>
                                        ))}

                                        <button 
                                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                            disabled={currentPage === totalPages}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300  bg-white  text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                        </button>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    const [candidates, setCandidates] = useState<any[]>(initialCandidates);

    return (
        <BrowserRouter>
            <div className="flex h-screen w-full overflow-hidden">
                <Sidebar />
                <Routes>
                    <Route path="/dashboard" element={<DashboardScreen candidates={candidates} />} />
                    <Route path="/" element={<CandidateScreen candidates={candidates} setCandidates={setCandidates} />} />
                    <Route path="/candidates" element={<Navigate to="/" replace />} />
                    <Route path="/jobs" element={<JobsScreen candidates={candidates} />} />
                    <Route path="/analytics" element={<AnalyticsScreen candidates={candidates} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
