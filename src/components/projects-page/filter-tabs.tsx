import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

export type ProjectFilter = 'all' | 'development' | 'uiux';

type FilterTabsProps = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

const filterOptions: Array<{ label: string; value: ProjectFilter }> = [
  { label: 'All', value: 'all' },
  { label: 'Development', value: 'development' },
  { label: 'UI/UX', value: 'uiux' },
];

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.value;

        return (
          <Button
            key={option.value}
            type="button"
            variant={isActive ? 'default' : 'outline'}
            onClick={() => onFilterChange(option.value)}
            className={cn(
              'min-w-28 transition-all duration-200',
              isActive && 'shadow-md'
            )}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
