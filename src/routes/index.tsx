import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div className="ml-10 mt-10">Hello /!</div>,
});
