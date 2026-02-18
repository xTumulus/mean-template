import {
  Component,
  input,
  HostListener,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.scss'],
})
export class Header implements OnInit, OnDestroy {
  readonly title = input<string>('No App Title');
  
  readonly version = input<string>('No Version');
  
  readonly username = input<string>('');

  // TODO add settings button in future task
  /** Callback fired when the settings button is clicked */
  // @Input() onSettingsClick?: () => void;

  isVisible = signal(true);
  isSettingsOpen = signal(false);

  private lastScrollY = 0;
  private scrollThreshold = 8; // px minimum scroll to trigger hide/show

  get userInitials(): string {
    return this.username()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  ngOnInit(): void {
    this.lastScrollY = window.scrollY;
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentY = window.scrollY;
    const delta = currentY - this.lastScrollY;

    if (Math.abs(delta) < this.scrollThreshold) return;

    if (delta > 0 && currentY > 60) {
      // Scrolling down — hide header
      this.isVisible.set(false);
    } else {
      // Scrolling up — show header
      this.isVisible.set(true);
    }

    this.lastScrollY = currentY;
  }

  // TODO add settings button in future task
  // handleSettingsClick(): void {
  //   this.isSettingsOpen.set(!this.isSettingsOpen());
  //   this.onSettingsClick?.();
  // }
}