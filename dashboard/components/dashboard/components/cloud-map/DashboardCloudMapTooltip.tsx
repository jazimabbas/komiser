import { memo } from 'react';
import { DashboardCloudMapTooltipProps } from './hooks/useCloudMapTooltip';

type DashboardCloudMapProps = {
  tooltip: DashboardCloudMapTooltipProps | undefined;
};

function DashboardCloudMap({ tooltip }: DashboardCloudMapProps) {
  return (
    <>
      {tooltip && (
        <div
          className="absolute z-20 flex animate-fade-in flex-col gap-2 rounded-lg bg-black-900 py-2 px-3 text-xs text-black-300 opacity-0"
          style={{
            top: `${tooltip.y - 60}px`,
            left: `${tooltip.x + 10}px`
          }}
        >
          <div className="-mx-3 flex items-center gap-2 border-b border-white/30 px-3 pb-2">
            <div
              className={`h-2 w-2 rounded-full ${
                tooltip.resources === 0 ? 'bg-black-300' : 'bg-info-600'
              }`}
            ></div>
            <span className="font-medium text-white">{tooltip.label}</span>
          </div>
          <span>
            Region:{' '}
            <span className="font-medium text-white">{tooltip.name}</span>
          </span>
          <span>
            Active resources:{' '}
            <span className="font-medium text-white">{tooltip.resources}</span>
          </span>
        </div>
      )}
    </>
  );
}

export default memo(DashboardCloudMap);
