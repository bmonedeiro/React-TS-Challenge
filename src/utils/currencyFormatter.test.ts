import currencyFormatter from './currencyFormatter'

describe('the currencyFormatter function', () => {
  it('should obtain currency', async () => {
    const formattedValue = currencyFormatter.format(1000)
    expect(formattedValue).toBe('$1,000.00');
  });

  it('should obtain formatted data', async () => {
    const formattedValue = currencyFormatter.format(0)
    expect(formattedValue).toBe('$0.00');
  });
});
