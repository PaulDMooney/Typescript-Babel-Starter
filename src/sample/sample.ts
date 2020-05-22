export function formatResponse(someObject: { value: string }) {
  return `Response: ${someObject?.value} ${process.env.TEST_VALUE}`;
}
