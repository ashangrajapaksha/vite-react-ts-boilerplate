// Use this helper method for reusing date formatting throughout your application:

// Example: const formattedDate = formatDate('2024-10-03');
// Output: "October 3, 2024"
export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// utils.ts
export const add = (a: number, b: number): number => {
  return a + b;
};
