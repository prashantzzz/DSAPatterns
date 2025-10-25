// DSA Patterns Data
// This file contains all the problem patterns, topics, and problem sets

const dsaPatterns = {
            arrays: {
                name: "Arrays",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M4 4h16v2H4zm0 5h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div>`,
                background: "var(--color-bg-1)",
                description: "Master array manipulation, two pointers, sliding window, and sorting techniques.",
                problems: [
                    { name: "Two Sum", difficulty: "easy", link: "https://leetcode.com/problems/two-sum/", subtopic: "2-Pointers", video: "https://youtu.be/UXW6rj9BgIQ" },
                    { name: "3Sum", difficulty: "medium", link: "https://leetcode.com/problems/3sum/", subtopic: "2-Pointers", video: "https://youtu.be/DhFh8Kw7ymk" },
                    { name: "Container With Most Water", difficulty: "medium", link: "https://leetcode.com/problems/container-with-most-water/", subtopic: "2-Pointers", video: "https://youtu.be/UuiTKBwPgAo" },
                    { name: "Maximum Subarray", difficulty: "easy", link: "https://leetcode.com/problems/maximum-subarray/", subtopic: "Sliding Window", video: "https://youtu.be/AHZpyENo7k4" },
                    { name: "Best Time to Buy and Sell Stock", difficulty: "easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", subtopic: "Sliding Window", video: "https://youtu.be/1pkOgXD63yU" },
                    { name: "Product of Array Except Self", difficulty: "medium", link: "https://leetcode.com/problems/product-of-array-except-self/", subtopic: "Sorting and Reordering", video: "https://youtu.be/bNvIQI2wAjk" },
                    { name: "Sort Colors", difficulty: "medium", link: "https://leetcode.com/problems/sort-colors/", subtopic: "Sorting and Reordering", video: "https://youtu.be/4xbWSRZHqac" },
                    { name: "Merge Intervals", difficulty: "medium", link: "https://leetcode.com/problems/merge-intervals/", subtopic: "Sorting and Reordering", video: "https://youtu.be/44H3cEC2fFM" },
                    { name: "Merge Sorted Array", difficulty: "easy", link: "https://leetcode.com/problems/merge-sorted-array/", subtopic: "Merge Sort", video: "https://youtu.be/P1Ic85RarKY" },
                    { name: "Count of Smaller Numbers After Self", difficulty: "hard", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", subtopic: "Merge Sort", video: "https://youtu.be/0aMcjMYEPHE" },
                    { name: "Reverse Pairs", difficulty: "hard", link: "https://leetcode.com/problems/reverse-pairs/", subtopic: "Merge Sort", video: "https://youtu.be/S6rsAlj_iB4" }
                ]
            },
            voting: {
                name: "Voting Algorithm",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg></div>`,
                background: "var(--color-bg-2)",
                description: "Boyer-Moore majority vote algorithm for finding majority elements.",
                problems: [
                    { name: "Majority Element", difficulty: "easy", link: "https://leetcode.com/problems/majority-element/", subtopic: "Majority Element", video: "https://youtu.be/AoX3BPWNnoE" },
                    { name: "Majority Element II", difficulty: "medium", link: "https://leetcode.com/problems/majority-element-ii/", subtopic: "Majority Element", video: "https://youtu.be/yDbkQd9t2ig" }
                ]
            },
            hashing: {
                name: "Hashing",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M15 21h-2v-3h-2v3H9v-3H7v-2h2V7H7V5h2V2h2v3h2V2h2v3h2v2h-2v9h2v2h-2v3zM11 7v9h2V7h-2z"/></svg></div>`,
                background: "var(--color-bg-3)",
                description: "Hash tables, frequency counting, and prefix sum with hashmaps.",
                problems: [
                    { name: "Valid Anagram", difficulty: "easy", link: "https://leetcode.com/problems/valid-anagram/", subtopic: "Frequency & Set", video: "https://youtu.be/9UtInBqnCgA" },
                    { name: "Group Anagrams", difficulty: "medium", link: "https://leetcode.com/problems/group-anagrams/", subtopic: "Frequency & Set", video: "https://youtu.be/vzdNOK2oB2E" },
                    { name: "Contains Duplicate", difficulty: "easy", link: "https://leetcode.com/problems/contains-duplicate/", subtopic: "Frequency & Set", video: "https://youtu.be/3OamzN90kPg" },
                    { name: "Subarray Sum Equals K", difficulty: "medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/", subtopic: "Subarray with Prefix Sum + HashMap", video: "https://youtu.be/HbbYPQc-Oo4" },
                    { name: "Continuous Subarray Sum", difficulty: "medium", link: "https://leetcode.com/problems/continuous-subarray-sum/", subtopic: "Subarray with Prefix Sum + HashMap", video: "https://youtu.be/OKcrLfR-8mE" },
                    { name: "Subarray Sums Divisible by K", difficulty: "medium", link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/", subtopic: "Subarray with Prefix Sum + HashMap", video: "https://youtu.be/pkN-hSeF04U" }
                ]
            },
            "binary-search": {
                name: "Binary Search",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>`,
                background: "var(--color-bg-4)",
                description: "Binary search variations including bounds, search in rotated arrays, and search on answers.",
                problems: [
                    { name: "Binary Search", difficulty: "easy", link: "https://leetcode.com/problems/binary-search/", subtopic: "Simple BS", video: "https://youtu.be/s4DPM8ct1pI" },
                    { name: "Search in Rotated Sorted Array", difficulty: "medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", subtopic: "Simple BS", video: "https://youtu.be/5qGrJbHhqFs" },
                    { name: "Find First and Last Position of Element", difficulty: "medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", subtopic: "Bound Problems", video: "https://youtu.be/hjR1IYVx9lY" },
                    { name: "Search Insert Position", difficulty: "easy", link: "https://leetcode.com/problems/search-insert-position/", subtopic: "Bound Problems", video: "https://youtu.be/K-RYzDZkzCI" },
                    { name: "Peak Index in Mountain Array", difficulty: "easy", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", subtopic: "Bound Problems", video: "https://youtu.be/kMzJy9es7Hc" },
                    { name: "Koko Eating Bananas", difficulty: "medium", link: "https://leetcode.com/problems/koko-eating-bananas/", subtopic: "On Answers", video: "https://youtu.be/U2SozAs9RzA" },
                    { name: "Minimum Number of Days to Make m Bouquets", difficulty: "medium", link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", subtopic: "On Answers", video: "https://youtu.be/TXAuxeYBTdg" },
                    { name: "Split Array Largest Sum", difficulty: "hard", link: "https://leetcode.com/problems/split-array-largest-sum/", subtopic: "On Answers", video: "https://youtu.be/thUd_WJn6wk" },
                    { name: "Search a 2D Matrix", difficulty: "medium", link: "https://leetcode.com/problems/search-a-2d-matrix/", subtopic: "2D", video: "https://youtu.be/Ber2pi2C0j0" },
                    { name: "Search a 2D Matrix II", difficulty: "medium", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/", subtopic: "2D", video: "https://youtu.be/ZfFl4torNg4" },
                    { name: "Find Peak Element", difficulty: "medium", link: "https://leetcode.com/problems/find-peak-element/", subtopic: "Simple BS", video: "https://youtu.be/cXxmbemS6XM" }
                ]
            },
            recursion: {
                name: "Recursion",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg></div>`,
                background: "var(--color-bg-5)",
                description: "Recursive problem solving focusing on subsequence generation.",
                problems: [
                    { name: "Subsets", difficulty: "medium", link: "https://leetcode.com/problems/subsets/", subtopic: "Subsequence", video: "https://youtu.be/REOH22Xwdkk" },
                    { name: "Subsets II", difficulty: "medium", link: "https://leetcode.com/problems/subsets-ii/", subtopic: "Subsequence", video: "https://youtu.be/Vn2v6ajA7U0" },
                    { name: "Generate Parentheses", difficulty: "medium", link: "https://leetcode.com/problems/generate-parentheses/", subtopic: "Subsequence", video: "https://youtu.be/s9fokUqJ76A" }
                ]
            },
            backtracking: {
                name: "Backtracking",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M9 19l1.41-1.41L5.83 13H20v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"/></svg></div>`,
                background: "var(--color-bg-6)",
                description: "Advanced backtracking problems with complex constraints.",
                problems: [
                    { name: "N-Queens", difficulty: "hard", link: "https://leetcode.com/problems/n-queens/", subtopic: "Hard Problems", video: "https://youtu.be/Ph95IHmRp5M" },
                    { name: "Sudoku Solver", difficulty: "hard", link: "https://leetcode.com/problems/sudoku-solver/", subtopic: "Hard Problems", video: "https://youtu.be/FWAIf_EVUKE" }
                ]
            },
            linkedlist: {
                name: "LinkedList",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/></svg></div>`,
                background: "var(--color-bg-7)",
                description: "Linked list manipulation using various pointer techniques.",
                problems: [
                    { name: "Reverse Linked List", difficulty: "easy", link: "https://leetcode.com/problems/reverse-linked-list/", subtopic: "Pointer Techniques", video: "https://youtu.be/G0_I-ZF0S38" },
                    { name: "Middle of the Linked List", difficulty: "easy", link: "https://leetcode.com/problems/middle-of-the-linked-list/", subtopic: "Pointer Techniques", video: "https://youtu.be/sGdwSH8RK-o" },
                    { name: "Linked List Cycle", difficulty: "easy", link: "https://leetcode.com/problems/linked-list-cycle/", subtopic: "Pointer Techniques", video: "https://youtu.be/gBTe7lFR3vc" },
                    { name: "Merge Two Sorted Lists", difficulty: "easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/", subtopic: "Pointer Techniques", video: "https://youtu.be/XIdigk956u0" },
                    { name: "Remove Nth Node From End", difficulty: "medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", subtopic: "Pointer Techniques", video: "https://youtu.be/XVuQxVej6y8" },
                    { name: "Reorder List", difficulty: "medium", link: "https://leetcode.com/problems/reorder-list/", subtopic: "Advanced", video: "https://youtu.be/S5bfdUTrKLM" },
                    { name: "Copy List with Random Pointer", difficulty: "medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", subtopic: "Advanced", video: "https://youtu.be/5Y2EiZST97Y" },
                    { name: "Merge k Sorted Lists", difficulty: "hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/", subtopic: "Advanced", video: "https://youtu.be/q5a5OiGbT6Q" },
                    { name: "Reverse Nodes in k-Group", difficulty: "hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", subtopic: "Advanced", video: "https://youtu.be/1UOPsfP85V4" }
                ]
            },
            greedy: {
                name: "Greedy Algorithms",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg></div>`,
                background: "var(--color-bg-8)",
                description: "Greedy algorithms for interval scheduling and optimization problems.",
                problems: [
                    { name: "Meeting Rooms", difficulty: "easy", link: "https://leetcode.com/problems/meeting-rooms/", subtopic: "Interval Scheduling", video: "https://youtu.be/PaJxqZVPhbg" },
                    { name: "Meeting Rooms II", difficulty: "medium", link: "https://leetcode.com/problems/meeting-rooms-ii/", subtopic: "Interval Scheduling", video: "https://youtu.be/FdzJmTCVyJU" },
                    { name: "Non-overlapping Intervals", difficulty: "medium", link: "https://leetcode.com/problems/non-overlapping-intervals/", subtopic: "Interval Scheduling", video: "https://youtu.be/ecinOOO3RGo" },
                    { name: "Jump Game", difficulty: "medium", link: "https://leetcode.com/problems/jump-game/", subtopic: "Optimization via Sorting", video: "https://youtu.be/Yan0cv2cLy8" },
                    { name: "Jump Game II", difficulty: "medium", link: "https://leetcode.com/problems/jump-game-ii/", subtopic: "Optimization via Sorting", video: "https://youtu.be/dJ7sWiOoK7g" }
                ]
            },
            "sliding-window": {
                name: "Sliding Window",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M4 6v12h16V6H4zm14 10H6V8h12v8z"/><path d="M8 10h8v2H8zm0 3h6v1H8z"/></svg></div>`,
                background: "var(--color-bg-1)",
                description: "Sliding window technique for subarray and substring problems.",
                problems: [
                    { name: "Maximum Average Subarray I", difficulty: "easy", link: "https://leetcode.com/problems/maximum-average-subarray-i/", subtopic: "Fixed Window Size", video: "https://youtu.be/hJ_Uy2DStOs" },
                    { name: "Sliding Window Maximum", difficulty: "hard", link: "https://leetcode.com/problems/sliding-window-maximum/", subtopic: "Fixed Window Size", video: "https://youtu.be/DfljaUwZsOk" },
                    { name: "Longest Substring Without Repeating Characters", difficulty: "medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", subtopic: "Variable Window Size", video: "https://youtu.be/wiGpQwVHdE0" },
                    { name: "Minimum Window Substring", difficulty: "hard", link: "https://leetcode.com/problems/minimum-window-substring/", subtopic: "Variable Window Size", video: "https://youtu.be/jSto0O4AJbM" },
                    { name: "Longest Repeating Character Replacement", difficulty: "medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/", subtopic: "Variable Window Size", video: "https://youtu.be/gqXU1UyA8pk" },
                    { name: "Permutation in String", difficulty: "medium", link: "https://leetcode.com/problems/permutation-in-string/", subtopic: "Counting in Window", video: "https://youtu.be/UbyhOgBN834" },
                    { name: "Find All Anagrams in a String", difficulty: "medium", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", subtopic: "Counting in Window", video: "https://youtu.be/G8xtZy0fDKg" },
                    { name: "Substring with Concatenation of All Words", difficulty: "hard", link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", subtopic: "Counting in Window", video: "https://youtu.be/8rXjm1PzP9Y" }
                ]
            },
            "stack-queue": {
                name: "Stack/Queue",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg></div>`,
                background: "var(--color-bg-2)",
                description: "Stack and queue data structures with monotonic stack patterns.",
                problems: [
                    { name: "Valid Parentheses", difficulty: "easy", link: "https://leetcode.com/problems/valid-parentheses/", subtopic: "Monotonic Stack", video: "https://youtu.be/WTzjTskDFMg" },
                    { name: "Daily Temperatures", difficulty: "medium", link: "https://leetcode.com/problems/daily-temperatures/", subtopic: "Monotonic Stack", video: "https://youtu.be/cTBiBSnjO3c" },
                    { name: "Next Greater Element I", difficulty: "easy", link: "https://leetcode.com/problems/next-greater-element-i/", subtopic: "Monotonic Stack", video: "https://youtu.be/Du881K7Jtk8" },
                    { name: "Largest Rectangle in Histogram", difficulty: "hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", subtopic: "Monotonic Stack", video: "https://youtu.be/zx5Sw9130L0" },
                    { name: "LRU Cache", difficulty: "medium", link: "https://leetcode.com/problems/lru-cache/", subtopic: "Cache", video: "https://youtu.be/7ABFKPK2hD4" },
                    { name: "LFU Cache", difficulty: "hard", link: "https://leetcode.com/problems/lfu-cache/", subtopic: "Cache", video: "https://youtu.be/0PSB9y8ehbk" }
                ]
            },
            "binary-tree": {
                name: "Binary Tree",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>`,
                background: "var(--color-bg-3)",
                description: "Binary tree operations including traversals, views, and construction.",
                problems: [
                    { name: "Binary Tree Inorder Traversal", difficulty: "easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", subtopic: "Traversal", video: "https://youtu.be/lxTGsVXjwvM" },
                    { name: "Binary Tree Preorder Traversal", difficulty: "easy", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", subtopic: "Traversal", video: "https://youtu.be/Bfqd8BsPVuw" },
                    { name: "Binary Tree Postorder Traversal", difficulty: "easy", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", subtopic: "Traversal", video: "https://youtu.be/QhszUQhGGlA" },
                    { name: "Binary Tree Level Order Traversal", difficulty: "medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", subtopic: "Traversal", video: "https://youtu.be/6ZnyEApgFYg" },
                    { name: "Binary Tree Right Side View", difficulty: "medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/", subtopic: "Tree Views", video: "https://youtu.be/KV4mRzTjlAk" },
                    { name: "Binary Tree Zigzag Level Order Traversal", difficulty: "medium", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", subtopic: "Tree Views", video: "https://youtu.be/3OXWEdlIGl4" },
                    { name: "Vertical Order Traversal", difficulty: "hard", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", subtopic: "Tree Views", video: "https://youtu.be/q_a6lpbKJdw" },
                    { name: "Maximum Depth of Binary Tree", difficulty: "easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", subtopic: "Tree Properties", video: "https://youtu.be/hTM3phVI6YQ" },
                    { name: "Diameter of Binary Tree", difficulty: "easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/", subtopic: "Tree Properties", video: "https://youtu.be/K81C31ytOZE" },
                    { name: "Balanced Binary Tree", difficulty: "easy", link: "https://leetcode.com/problems/balanced-binary-tree/", subtopic: "Tree Properties", video: "https://youtu.be/Yt50Jfbd8Po" },
                    { name: "Lowest Common Ancestor", difficulty: "medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", subtopic: "Tree Properties", video: "https://youtu.be/_-QHfMDde90" },
                    { name: "Construct Binary Tree from Preorder and Inorder", difficulty: "medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", subtopic: "Tree Construction", video: "https://youtu.be/aZNaLrVebKQ" },
                    { name: "Serialize and Deserialize Binary Tree", difficulty: "hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", subtopic: "Tree Construction", video: "https://youtu.be/u4JAi2JJhI8" }
                ]
            },
            "binary-search-tree": {
                name: "Binary Search Tree",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>`,
                background: "var(--color-bg-4)",
                description: "Binary search tree operations and validations.",
                problems: [
                    { name: "Validate Binary Search Tree", difficulty: "medium", link: "https://leetcode.com/problems/validate-binary-search-tree/", subtopic: "Core BST Operations", video: "https://youtu.be/s6ATEkipzow" },
                    { name: "Kth Smallest Element in BST", difficulty: "medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", subtopic: "Core BST Operations", video: "https://youtu.be/5LUXSvjmGCw" },
                    { name: "Lowest Common Ancestor of BST", difficulty: "easy", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", subtopic: "Core BST Operations", video: "https://youtu.be/gs2LMfuOR9k" },
                    { name: "Convert BST to Greater Tree", difficulty: "medium", link: "https://leetcode.com/problems/convert-bst-to-greater-tree/", subtopic: "Core BST Operations", video: "https://youtu.be/7vJJlz9FeAk" },
                    { name: "Delete Node in BST", difficulty: "medium", link: "https://leetcode.com/problems/delete-node-in-a-bst/", subtopic: "Core BST Operations", video: "https://youtu.be/LFzAoJJt92M" },
                    { name: "Recover Binary Search Tree", difficulty: "medium", link: "https://leetcode.com/problems/recover-binary-search-tree/", subtopic: "Core BST Operations", video: "https://youtu.be/ZWGW7FminDM" }
                ]
            },
            heaps: {
                name: "Heaps",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>`,
                background: "var(--color-bg-5)",
                description: "Heap data structure for priority queue operations and kth element problems.",
                problems: [
                    { name: "Kth Largest Element in Array", difficulty: "medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", subtopic: "Kth Element Problems", video: "https://youtu.be/XEmy13g1Qxc" },
                    { name: "Top K Frequent Elements", difficulty: "medium", link: "https://leetcode.com/problems/top-k-frequent-elements/", subtopic: "Kth Element Problems", video: "https://youtu.be/YPTqKIgVk-k" },
                    { name: "Find Median from Data Stream", difficulty: "hard", link: "https://leetcode.com/problems/find-median-from-data-stream/", subtopic: "Kth Element Problems", video: "https://youtu.be/itmhHWaHupI" },
                    { name: "Task Scheduler", difficulty: "medium", link: "https://leetcode.com/problems/task-scheduler/", subtopic: "Heapify", video: "https://youtu.be/YCD_iKzyqvs" },
                    { name: "Merge k Sorted Lists", difficulty: "hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/", subtopic: "Heapify", video: "https://youtu.be/q5a5OiGbT6Q" },
                    { name: "Smallest Range Covering Elements from K Lists", difficulty: "hard", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", subtopic: "Heapify", video: "https://youtu.be/zplklOy7ENo" }
                ]
            },
            graphs: {
                name: "Graphs",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>`,
                background: "var(--color-bg-6)",
                description: "Graph algorithms including traversals, cycle detection, shortest paths, and MST.",
                problems: [
                    { name: "Number of Islands", difficulty: "medium", link: "https://leetcode.com/problems/number-of-islands/", subtopic: "Traversals", video: "https://youtu.be/pV2kpPD66nE" },
                    { name: "Clone Graph", difficulty: "medium", link: "https://leetcode.com/problems/clone-graph/", subtopic: "Traversals", video: "https://youtu.be/mQeF6bN8hMk" },
                    { name: "Pacific Atlantic Water Flow", difficulty: "medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", subtopic: "Traversals", video: "https://youtu.be/s-VkcjHqkGI" },
                    { name: "Surrounded Regions", difficulty: "medium", link: "https://leetcode.com/problems/surrounded-regions/", subtopic: "Traversals", video: "https://youtu.be/9z2BunAyTXA" },
                    { name: "Word Ladder", difficulty: "hard", link: "https://leetcode.com/problems/word-ladder/", subtopic: "Traversals", video: "https://youtu.be/h9iTnkgv05E" },
                    { name: "Course Schedule", difficulty: "medium", link: "https://leetcode.com/problems/course-schedule/", subtopic: "Cycle Detection", video: "https://youtu.be/EgI5nU9etnU" },
                    { name: "Course Schedule II", difficulty: "medium", link: "https://leetcode.com/problems/course-schedule-ii/", subtopic: "Cycle Detection", video: "https://youtu.be/Akt3glAwyfY" },
                    { name: "Redundant Connection", difficulty: "medium", link: "https://leetcode.com/problems/redundant-connection/", subtopic: "Cycle Detection", video: "https://youtu.be/wU6udHRIkcc" },
                    { name: "Find if Path Exists in Graph", difficulty: "easy", link: "https://leetcode.com/problems/find-if-path-exists-in-graph/", subtopic: "Cycle Detection", video: "https://youtu.be/jDdFo4x1zYo" },
                    { name: "Alien Dictionary", difficulty: "hard", link: "https://leetcode.com/problems/alien-dictionary/", subtopic: "Topological Sort", video: "https://youtu.be/6kTZYvNNyps" },
                    { name: "Minimum Height Trees", difficulty: "medium", link: "https://leetcode.com/problems/minimum-height-trees/", subtopic: "Topological Sort", video: "https://youtu.be/nbo9foXXVxs" },
                    { name: "Sequence Reconstruction", difficulty: "medium", link: "https://leetcode.com/problems/sequence-reconstruction/", subtopic: "Topological Sort", video: "https://youtu.be/VXINChcJz0Y" },
                    { name: "Network Delay Time", difficulty: "medium", link: "https://leetcode.com/problems/network-delay-time/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/EaphyqKU4PQ" },
                    { name: "Cheapest Flights Within K Stops", difficulty: "medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/5eIK3zUdYmE" },
                    { name: "Path With Maximum Probability", difficulty: "medium", link: "https://leetcode.com/problems/path-with-maximum-probability/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/kbCzmTy608A" },
                    { name: "Shortest Path in Binary Matrix", difficulty: "medium", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/YPIb7GwKkqs" },
                    { name: "Word Ladder II", difficulty: "hard", link: "https://leetcode.com/problems/word-ladder-ii/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/ZVafeF7Z5-E" },
                    { name: "Swim in Rising Water", difficulty: "hard", link: "https://leetcode.com/problems/swim-in-rising-water/", subtopic: "Shortest Path Algorithms", video: "https://youtu.be/amvrKlMLuGY" },
                    { name: "Min Cost to Connect All Points", difficulty: "medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/", subtopic: "MST", video: "https://youtu.be/f7JOBJIC-NA" },
                    { name: "Optimize Water Distribution", difficulty: "hard", link: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/", subtopic: "MST", video: "https://youtu.be/4lZMrYANDWQ" },
                    { name: "Critical Connections in Network", difficulty: "hard", link: "https://leetcode.com/problems/critical-connections-in-a-network/", subtopic: "MST", video: "https://youtu.be/Rhxs4k6DyMM" },
                    { name: "Accounts Merge", difficulty: "medium", link: "https://leetcode.com/problems/accounts-merge/", subtopic: "MST", video: "https://youtu.be/wU6udHRIkcc" },
                    { name: "Number of Operations to Make Network Connected", difficulty: "medium", link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/", subtopic: "MST", video: "https://youtu.be/FMwpt_aQOGw" },
                    { name: "Satisfiability of Equality Equations", difficulty: "medium", link: "https://leetcode.com/problems/satisfiability-of-equality-equations/", subtopic: "MST", video: "https://youtu.be/VnNiLzM6Qe8" },
                    { name: "Most Stones Removed with Same Row or Column", difficulty: "medium", link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", subtopic: "MST", video: "https://youtu.be/OwMNX8SPavM" }
                ]
            },
            dp: {
                name: "Dynamic Programming",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg></div>`,
                background: "var(--color-bg-7)",
                description: "Dynamic programming problems across various patterns and dimensions.",
                problems: [
                    { name: "Climbing Stairs", difficulty: "easy", link: "https://leetcode.com/problems/climbing-stairs/", subtopic: "1D/2D", video: "https://youtu.be/Y0lT9Fck7qI" },
                    { name: "House Robber", difficulty: "medium", link: "https://leetcode.com/problems/house-robber/", subtopic: "1D/2D", video: "https://youtu.be/xlvhyfcoQa4" },
                    { name: "House Robber II", difficulty: "medium", link: "https://leetcode.com/problems/house-robber-ii/", subtopic: "1D/2D", video: "https://youtu.be/rWAJCfYYOvM" },
                    { name: "Decode Ways", difficulty: "medium", link: "https://leetcode.com/problems/decode-ways/", subtopic: "1D/2D", video: "https://youtu.be/6aEyTjFi7EU" },
                    { name: "Unique Paths", difficulty: "medium", link: "https://leetcode.com/problems/unique-paths/", subtopic: "DP on Grids", video: "https://youtu.be/IlEsdxuD4lY" },
                    { name: "Unique Paths II", difficulty: "medium", link: "https://leetcode.com/problems/unique-paths-ii/", subtopic: "DP on Grids", video: "https://youtu.be/z6kelCB0vOA" },
                    { name: "Minimum Path Sum", difficulty: "medium", link: "https://leetcode.com/problems/minimum-path-sum/", subtopic: "DP on Grids", video: "https://youtu.be/_rgTlyky1uQ" },
                    { name: "Dungeon Game", difficulty: "hard", link: "https://leetcode.com/problems/dungeon-game/", subtopic: "DP on Grids", video: "https://youtu.be/4uUGxNF0-3w" },
                    { name: "Best Time to Buy and Sell Stock", difficulty: "easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", subtopic: "DP on Stocks", video: "https://youtu.be/1pkOgXD63yU" },
                    { name: "Best Time to Buy and Sell Stock II", difficulty: "medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", subtopic: "DP on Stocks", video: "https://youtu.be/3SJ3pUkPQMc" },
                    { name: "Best Time to Buy and Sell Stock III", difficulty: "hard", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", subtopic: "DP on Stocks", video: "https://youtu.be/-uQGzhYj8BQ" },
                    { name: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", subtopic: "DP on Stocks", video: "https://youtu.be/I7j0F7AHpb8" },
                    { name: "Longest Common Subsequence", difficulty: "medium", link: "https://leetcode.com/problems/longest-common-subsequence/", subtopic: "DP on Subsequences", video: "https://youtu.be/NPZn9jBrX8U" },
                    { name: "Longest Palindromic Subsequence", difficulty: "medium", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", subtopic: "DP on Subsequences", video: "https://youtu.be/6i_T5kkfv4A" },
                    { name: "Palindromic Substrings", difficulty: "medium", link: "https://leetcode.com/problems/palindromic-substrings/", subtopic: "DP on Subsequences", video: "https://youtu.be/4RACzI5-du8" },
                    { name: "Longest Increasing Subsequence", difficulty: "medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/", subtopic: "LIS", video: "https://youtu.be/cjWnW0hdF1Y" },
                    { name: "Number of Longest Increasing Subsequence", difficulty: "medium", link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", subtopic: "LIS", video: "https://youtu.be/22s1xxRvy28" },
                    { name: "Russian Doll Envelopes", difficulty: "hard", link: "https://leetcode.com/problems/russian-doll-envelopes/", subtopic: "LIS", video: "https://youtu.be/CE2b_-XfVDk" },
                    { name: "Edit Distance", difficulty: "hard", link: "https://leetcode.com/problems/edit-distance/", subtopic: "DP on Strings", video: "https://youtu.be/XYi2-LPrwm4" },
                    { name: "Distinct Subsequences", difficulty: "hard", link: "https://leetcode.com/problems/distinct-subsequences/", subtopic: "DP on Strings", video: "https://youtu.be/nVG7eTiD2bY" },
                    { name: "Regular Expression Matching", difficulty: "hard", link: "https://leetcode.com/problems/regular-expression-matching/", subtopic: "DP on Strings", video: "https://youtu.be/HAA8mgxlov8" },
                    { name: "Matrix Chain Multiplication", difficulty: "hard", link: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication/", subtopic: "MCM DP", video: "https://youtu.be/prx1psByp7U" },
                    { name: "Burst Balloons", difficulty: "hard", link: "https://leetcode.com/problems/burst-balloons/", subtopic: "MCM DP", video: "https://youtu.be/VFskby7lUbw" }
                ]
            },
            tries: {
                name: "Tries",
                icon: `<div class="topic-icon" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>`,
                background: "var(--color-bg-8)",
                description: "Trie data structure for efficient string operations and pattern matching.",
                problems: [
                    { name: "Implement Trie", difficulty: "medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", subtopic: "Basic Trie Operations", video: "https://youtu.be/oobqoCJlHA0" },
                    { name: "Design Add and Search Words Data Structure", difficulty: "medium", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", subtopic: "Basic Trie Operations", video: "https://youtu.be/BTf05gs_8iU" },
                    { name: "Word Search II", difficulty: "hard", link: "https://leetcode.com/problems/word-search-ii/", subtopic: "Trie-Based Problem Patterns", video: "https://youtu.be/asbcE9mZz_U" },
                    { name: "Concatenated Words", difficulty: "hard", link: "https://leetcode.com/problems/concatenated-words/", subtopic: "Trie-Based Problem Patterns", video: "https://youtu.be/mTyrs_FeHiU" },
                    { name: "Maximum XOR of Two Numbers in Array", difficulty: "medium", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", subtopic: "Trie-Based Problem Patterns", video: "https://youtu.be/jCu-Pd0IjIA" }
                ]
            }
        };
