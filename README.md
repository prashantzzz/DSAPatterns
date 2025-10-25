# DSA Pattern Pro

A modern, responsive web application for tracking and mastering Data Structures & Algorithms through pattern-based learning. Built with vanilla JavaScript, HTML, and CSS - no frameworks required.

![DSA Pattern Pro](https://img.shields.io/badge/Problems-141-blue) ![Progress Tracking](https://img.shields.io/badge/Progress-Tracked-green) ![Dark Mode](https://img.shields.io/badge/Dark_Mode-Supported-black)

## 🎯 Overview

DSA Pattern Pro helps developers prepare for coding interviews by organizing 141 curated DSA problems into 16 distinct pattern categories. Track your progress, filter by company and difficulty, and access video solutions - all in a beautiful, modern interface.

## ✨ Key Features

### 📊 Progress Tracking
- **Real-time Statistics**: Track solved problems, success rate, and daily streak
- **Topic-wise Progress**: Monitor completion for each of the 16 DSA topics
- **Persistent Storage**: All progress saved locally (no backend required)
- **Visual Progress Bars**: See your advancement at a glance

### 🎨 Modern UI/UX
- **Professional Design**: Clean morphism-inspired interface with gradient SVG icons
- **Dark Mode**: Full dark mode support with smooth transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Sticky Sidebars**: Navigation stays accessible while scrolling

### 🔍 Advanced Filtering
- **Topic Filter**: 16 categories including Arrays, Hashing, Dynamic Programming, Graphs, Trees, etc.
- **Company Filter**: Filter problems by 13 top companies (Amazon, Google, Microsoft, Facebook, Apple, etc.)
- **Difficulty Filter**: Easy, Medium, Hard levels
- **Combined Filtering**: Apply multiple filters simultaneously

### 📚 Problem Management
- **141 Curated Problems**: Hand-picked problems covering all major patterns
- **Video Solutions**: Embedded YouTube video tutorials for each problem
- **Company Tags**: See which companies ask each question (top 5)
- **Direct Links**: Quick access to problem statements on LeetCode/other platforms
- **Checkboxes**: Mark problems as completed with instant progress updates

### 📱 Responsive Design
- **Mobile-Friendly**: Touch-optimized interface for smartphones
- **Tablet Support**: Adaptive layout for medium-sized screens
- **Desktop Optimized**: Full-featured experience with sidebars
- **Floating Action Buttons**: Easy sidebar access on mobile

### 🎬 Video Integration
- **Embedded Videos**: Watch solution videos directly in the app
- **Modal Player**: Clean, distraction-free video viewing
- **Fallback Links**: Direct YouTube links if embedding fails

### 🏆 Gamification
- **Streak Tracking**: Monitor consecutive days of problem-solving
- **Fire Icon**: Visual streak indicator with gradient animation
- **Achievement System**: Unlock badges based on progress milestones
- **Motivation**: Track your journey from 0 to 141 problems

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Storage**: localStorage API for client-side persistence
- **Icons**: Professional SVG icons with gradient backgrounds
- **Responsive**: CSS Grid and Flexbox layouts
- **No Dependencies**: Zero external frameworks or libraries

## 📂 Project Structure

```
dsa-pattern-pro/
├── index.html           # Main HTML file
├── README.md           # Project documentation
└── assets/             # (Optional) Additional assets
```

## 🚀 Getting Started

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd dsa-pattern-pro
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build process or server required!

### Usage

1. **Browse Problems**: Explore 141 problems organized by pattern
2. **Filter**: Use topic, company, and difficulty filters
3. **Track Progress**: Check off problems as you complete them
4. **Watch Videos**: Click video buttons for solution tutorials
5. **Monitor Stats**: View your progress in Quick Stats section

## 🎨 Features in Detail

### Left Sidebar
- **Topics Section**: Scrollable list of 16 DSA patterns with progress
- **Quick Stats**: Compact cards showing:
  - Total Problems (141)
  - Solved Count
  - Success Rate
  - Current Streak

### Main Content Area
- **Filter Controls**: Company, Difficulty, and Expand/Collapse button
- **Topic Cards**: Collapsible cards for each DSA pattern
- **Problem List**: Each problem shows:
  - Checkbox for completion
  - Problem name
  - Company tags (uncolored, minimal)
  - Difficulty badge (Easy/Medium/Hard)
  - Video button
  - Solve button (direct link)

### Right Sidebar
- **Additional Features**: Statistics, achievements, etc.
- **Sticky Behavior**: Stays visible while scrolling

### Top Navbar
- **Branding**: DSA Pattern Pro logo
- **Streak Display**: Current streak with fire icon
- **Dark Mode Toggle**: Switch between light and dark themes
- **Mobile Menu**: Hamburger menu for mobile devices

## 🎯 Problem Categories

1. **Arrays** - 2-pointers, Sliding Window, Sorting, Merge Sort
2. **Hashing** - Frequency & Set, Subarray patterns
3. **Binary Search** - Bounds, Simple BS, On Answers, 2D
4. **Recursion** - Subsequence problems
5. **Backtracking** - Hard problems
6. **LinkedList** - Pointer techniques, Advanced
7. **Greedy Algorithms** - Interval Scheduling, Optimization
8. **Sliding Window** - Fixed/Variable size, Counting
9. **Stack/Queue** - Monotonic Stack, Cache
10. **Binary Tree** - Traversal, Views, Properties, Construction
11. **Binary Search Tree** - Core operations
12. **Heaps** - Heapify, Kth Element
13. **Graphs** - Traversals, Cycles, Shortest Path, MST
14. **Dynamic Programming** - 1D/2D, Grids, Stocks, Strings, LIS, MCM
15. **Tries** - Basic operations, Pattern matching
16. **Voting Algorithm** - Majority Element

## 🎨 Design Features

### Visual Design
- **Morphism Style**: Soft shadows and subtle depth
- **Gradient Icons**: Beautiful SVG icons with linear gradients
- **Color Scheme**: Professional palette with cream/teal for light mode, slate for dark mode
- **Typography**: FKGroteskNeue, Geist, Inter font stack
- **Spacing**: Consistent padding and gaps throughout

### Animations
- **Smooth Transitions**: 0.3s ease for all state changes
- **Hover Effects**: Subtle lifts and shadow enhancements
- **Fire Animation**: Flickering flame for streak icon
- **Card Expansion**: Smooth width transitions

### Dark Mode
- **Full Coverage**: Every element adapts to dark theme
- **CSS Variables**: Centralized color management
- **Persistence**: Theme preference saved to localStorage
- **Smooth Transition**: No jarring color shifts

## 💾 Data Storage

All data is stored locally in the browser using localStorage:

```javascript
// Stored Keys
- completedProblems: Array of problem IDs
- theme: 'light' or 'dark'
- currentStreak: Number
- lastActiveDate: Date string
```

## 🔒 Privacy

- **No Backend**: All data stays on your device
- **No Tracking**: No analytics or external requests
- **No Cookies**: Uses localStorage only
- **Offline Capable**: Works without internet (except video playback)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## 🎯 Future Enhancements

Potential features for future updates:
- Notes feature for each problem
- Time tracking per problem
- Random problem selector
- Export/Import progress
- Keyboard shortcuts
- Problem search
- Revision reminders
- Custom goals

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for developers preparing for coding interviews

## 🙏 Acknowledgments

- Problem data curated from top coding interview resources
- Video solutions from various YouTube channels
- Company tags based on interview trends
- Inspired by popular DSA learning platforms

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Happy Coding! 🚀**

*Master patterns, not just problems.*
