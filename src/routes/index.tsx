import { createFileRoute } from '@tanstack/react-router';
import CounterDisplay from '../pages/CounterDisplay';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="ml-10 mt-10">
      <CounterDisplay />
    </div>
  ),
});
