import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from 'recharts';

// Data for Graph 1: Menu Visits vs ATC Count
const lineData = Array.from({ length: 21 }, (_, i) => ({
  atc: i,
  hf: 5 + i * 1.85,
  avg: 5 + i * 1.55,
}));

// Data for Graph 2: % Orders vs Rx Ratings
const barData = [
  { rating: '3.6', hf: 9, avg: 11 },
  { rating: '3.8', hf: 16, avg: 19 },
  { rating: '4.0', hf: 31.5, avg: 31 },
  { rating: '4.2', hf: 30, avg: 24 },
  { rating: '4.4', hf: 13, avg: 10 },
  { rating: '4.6', hf: 7, avg: 5 },
  { rating: '4.8', hf: 2, avg: 0 },
];

const COLORS = {
  hf: '#fc8019', // Swiggy Orange
  avg: 'hsl(var(--chart-avg))', // Theme-aware gray
  axis: 'currentColor',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 border border-border text-foreground px-3 py-2 rounded-lg shadow-sm text-xs font-sans">
        <p className="font-bold mb-1 opacity-80">{label}</p>
        <div className="flex flex-col gap-1">
          <span style={{ color: payload[0].color }}>HF User: {Number(payload[0].value).toFixed(1)}</span>
          <span style={{ color: payload[1].color }}>Avg User: {Number(payload[1].value).toFixed(1)}</span>
        </div>
      </div>
    );
  }
  return null;
};

export function EffortGraphs() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
      {/* Graph 1: Line Chart */}
      <div className="flex-1 bg-muted/20 border border-border/10 rounded-3xl p-6 relative">
        <div className="flex items-center gap-4 mb-6 pt-2 pl-4">
            <h4 className="font-bold font-sans text-sm uppercase tracking-widest text-foreground/80">Menu Visits vs ATC Count</h4>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 20, left: 0, bottom: 25 }}>
              <XAxis 
                dataKey="atc" 
                tick={{ fontSize: 12, fill: 'currentColor', opacity: 0.7 }}
                tickFormatter={(val) => (val % 5 === 0 ? val : '')}
                axisLine={{ stroke: 'currentColor', strokeWidth: 2, opacity: 0.8 }}
                tickLine={{ stroke: 'currentColor', opacity: 0.8 }}
                label={{ value: 'ATC count', position: 'insideBottom', offset: -15, style: { fill: 'currentColor', fontWeight: 'bold' } }}
              />
              <YAxis 
                ticks={[10, 20, 30, 40]}
                domain={[0, 42]}
                tick={{ fontSize: 12, fill: 'currentColor', opacity: 0.7 }}
                axisLine={{ stroke: 'currentColor', strokeWidth: 2, opacity: 0.8 }}
                tickLine={{ stroke: 'currentColor', opacity: 0.8 }}
                label={{ value: 'Menu Visits', angle: -90, position: 'insideLeft', style: { fill: 'currentColor', fontWeight: 'bold' } }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'currentColor', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.2 }} />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: '600' }} />
              <Line 
                type="monotone" 
                name="HF User"
                dataKey="hf" 
                stroke={COLORS.hf} 
                strokeWidth={4} 
                dot={false}
                activeDot={{ r: 6, fill: COLORS.hf, stroke: 'var(--background)' }} 
              />
              <Line 
                type="monotone" 
                name="Avg. User"
                dataKey="avg" 
                stroke={COLORS.avg} 
                strokeWidth={4} 
                dot={false}
                activeDot={{ r: 6, fill: COLORS.avg, stroke: 'var(--background)' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graph 2: Bar Chart */}
      <div className="flex-1 bg-muted/20 border border-border/10 rounded-3xl p-6 relative">
         <div className="flex items-center gap-4 mb-6 pt-2 pl-4">
            <h4 className="font-bold font-sans text-sm uppercase tracking-widest text-foreground/80">% Orders vs Rx Ratings</h4>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }} barGap={2} barSize={12}>
              <XAxis 
                dataKey="rating" 
                tick={{ fontSize: 12, fill: 'currentColor', opacity: 0.7 }}
                axisLine={{ stroke: 'currentColor', strokeWidth: 2, opacity: 0.8 }}
                tickLine={{ stroke: 'currentColor', opacity: 0.8 }}
                label={{ value: 'Rx Ratings', position: 'insideBottom', offset: -10, style: { fill: 'currentColor', fontWeight: 'bold' } }}
              />
              <YAxis 
                ticks={[10, 20, 30]}
                domain={[0, 35]}
                tick={{ fontSize: 12, fill: 'currentColor', opacity: 0.7 }}
                axisLine={{ stroke: 'currentColor', strokeWidth: 2, opacity: 0.8 }}
                tickLine={{ stroke: 'currentColor', opacity: 0.8 }}
                label={{ value: '% Orders', angle: -90, position: 'insideLeft', style: { fill: 'currentColor', fontWeight: 'bold' } }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'currentColor', opacity: 0.05 }} />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: '600' }} />
              <Bar 
                name="HF User"
                dataKey="hf" 
                fill={COLORS.hf} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                name="Avg. User"
                dataKey="avg" 
                fill={COLORS.avg} 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
