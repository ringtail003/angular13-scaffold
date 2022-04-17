import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it(`should have as title 'angular13-scaffold'`, async () => {
    const { fixture } = await render(AppComponent);
    expect(fixture.componentInstance.title).toBe('angular13-scaffold');
  });

  it('should render title', async () => {
    await render(AppComponent);
    expect(
      screen.getByText('angular13-scaffold app is running!')
    ).toBeInTheDocument();
  });
});
