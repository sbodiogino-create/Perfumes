export function generateOrderId(): string {
  return `PLS-${Math.floor(100000 + Math.random() * 900000)}`;
}
