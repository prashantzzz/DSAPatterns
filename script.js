// DSA Pattern Master - Main Application Logic

// Global state management (using variables instead of localStorage due to sandbox restrictions)
        let progressState = {
            totalProblems: 141,
            solvedProblems: 0,
            completedByTopic: {
                'Arrays': 0,
                'Voting Algorithm': 0, 
                'Hashing': 0,
                'Binary Search': 0,
                'Recursion': 0,
                'Backtracking': 0,
                'LinkedList': 0,
                'Greedy Algorithms': 0,
                'Sliding Window': 0,
                'Stack/Queue': 0,
                'Binary Tree': 0,
                'Binary Search Tree': 0,
                'Heaps': 0,
                'Graphs': 0,
                'Dynamic Programming': 0,
                'Tries': 0
            },
            currentStreak: 0,
            longestStreak: 0,
            completedProblems: new Set()
        };

        let userData = {
            bookmarkedProblems: new Set(),
            problemNotes: {},
            problemStatus: {},
            problemTimes: {},
            activityLog: [],
            dailyGoal: 3,
            selectedRoadmap: 'beginner',
            darkMode: false,
            badges: new Set()
        };

        let currentTimer = {
            running: false,
            startTime: null,
            elapsed: 0,
            interval: null
        };

        let currentProblem = null;

        // Companies data integration - 13 companies with problem mappings
        const companiesData = {
            all_companies: [
                "Adobe", "Amazon", "Apple", "Bloomberg", "Facebook", "Flipkart",
                "Goldman Sachs", "Google", "LinkedIn", "Meta", "Microsoft", "Oracle", "Uber"
            ],
            problems_companies_mapping: {
                "Two Sum": ["Amazon", "Google", "Facebook", "Microsoft", "Apple"],
                "3Sum": ["Amazon", "Microsoft", "Facebook", "Google", "Apple"],
                "Container With Most Water": ["Amazon", "Google", "Microsoft", "Facebook", "Bloomberg"],
                "Maximum Subarray": ["Amazon", "Google", "Microsoft", "Apple", "Facebook"],
                "Best Time to Buy and Sell Stock": ["Amazon", "Google", "Facebook", "Microsoft", "Goldman Sachs"],
                "Product of Array Except Self": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Sort Colors": ["Microsoft", "Amazon", "Google", "Facebook", "Apple"],
                "Merge Intervals": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Merge Sorted Array": ["Amazon", "Microsoft", "Google", "Facebook", "Apple"],
                "Count of Smaller Numbers After Self": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Reverse Pairs": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Majority Element": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Majority Element II": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Valid Anagram": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Group Anagrams": ["Amazon", "Google", "Microsoft", "Facebook", "Uber"],
                "Contains Duplicate": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Subarray Sum Equals K": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Continuous Subarray Sum": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Subarray Sums Divisible by K": ["Google", "Amazon", "Microsoft", "Facebook", "Adobe"],
                "Binary Search": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Search in Rotated Sorted Array": ["Amazon", "Google", "Microsoft", "Facebook", "LinkedIn"],
                "Find First and Last Position of Element": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Search Insert Position": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Peak Index in Mountain Array": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Koko Eating Bananas": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Minimum Number of Days to Make m Bouquets": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Split Array Largest Sum": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Search a 2D Matrix": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Search a 2D Matrix II": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Find Peak Element": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Subsets": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Subsets II": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Generate Parentheses": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "N-Queens": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Sudoku Solver": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Reverse Linked List": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Middle of the Linked List": ["Amazon", "Google", "Microsoft", "Facebook", "LinkedIn"],
                "Linked List Cycle": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Merge Two Sorted Lists": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Remove Nth Node From End": ["Amazon", "Google", "Microsoft", "Facebook", "LinkedIn"],
                "Reorder List": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Copy List with Random Pointer": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Merge k Sorted Lists": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Reverse Nodes in k-Group": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Meeting Rooms": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Meeting Rooms II": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Non-overlapping Intervals": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Jump Game": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Jump Game II": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Maximum Average Subarray I": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Sliding Window Maximum": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Longest Substring Without Repeating Characters": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Minimum Window Substring": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Longest Repeating Character Replacement": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Permutation in String": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Find All Anagrams in a String": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Substring with Concatenation of All Words": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Valid Parentheses": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Daily Temperatures": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Next Greater Element I": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Largest Rectangle in Histogram": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "LRU Cache": ["Amazon", "Google", "Microsoft", "Facebook", "LinkedIn"],
                "LFU Cache": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Binary Tree Inorder Traversal": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Binary Tree Preorder Traversal": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Binary Tree Postorder Traversal": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Binary Tree Level Order Traversal": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Binary Tree Right Side View": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Binary Tree Zigzag Level Order Traversal": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Vertical Order Traversal": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Maximum Depth of Binary Tree": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Diameter of Binary Tree": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Balanced Binary Tree": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Lowest Common Ancestor": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Construct Binary Tree from Preorder and Inorder": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Serialize and Deserialize Binary Tree": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Validate Binary Search Tree": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Kth Smallest Element in BST": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Lowest Common Ancestor of BST": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Convert BST to Greater Tree": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Delete Node in BST": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Recover Binary Search Tree": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Kth Largest Element in Array": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Top K Frequent Elements": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Find Median from Data Stream": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Task Scheduler": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Smallest Range Covering Elements from K Lists": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Number of Islands": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Clone Graph": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Pacific Atlantic Water Flow": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Surrounded Regions": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Word Ladder": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Course Schedule": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Course Schedule II": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Redundant Connection": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Find if Path Exists in Graph": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Alien Dictionary": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Minimum Height Trees": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Sequence Reconstruction": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Network Delay Time": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Cheapest Flights Within K Stops": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Path With Maximum Probability": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Shortest Path in Binary Matrix": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Word Ladder II": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Swim in Rising Water": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Min Cost to Connect All Points": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Optimize Water Distribution": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Critical Connections in Network": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Accounts Merge": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Number of Operations to Make Network Connected": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Satisfiability of Equality Equations": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Most Stones Removed with Same Row or Column": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Climbing Stairs": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "House Robber": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "House Robber II": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Decode Ways": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Unique Paths": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Unique Paths II": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Minimum Path Sum": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Dungeon Game": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Best Time to Buy and Sell Stock II": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Best Time to Buy and Sell Stock III": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Best Time to Buy and Sell Stock with Cooldown": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Longest Common Subsequence": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Longest Palindromic Subsequence": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Palindromic Substrings": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Longest Increasing Subsequence": ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
                "Number of Longest Increasing Subsequence": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Russian Doll Envelopes": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Edit Distance": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Distinct Subsequences": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Regular Expression Matching": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Matrix Chain Multiplication": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Burst Balloons": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Implement Trie": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
                "Design Add and Search Words Data Structure": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Word Search II": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"],
                "Concatenated Words": ["Google", "Amazon", "Microsoft", "Facebook", "LinkedIn"],
                "Maximum XOR of Two Numbers in Array": ["Google", "Amazon", "Microsoft", "Facebook", "Bloomberg"]
            }
        };

        // Complete DSA Pattern Data - 141 Questions Across 16 Categories

let currentFilter = 'all';
        let currentCompanyFilter = 'all';
        let currentDifficultyFilter = 'all';
        let expandedCards = new Set();
        
        /*
         * EXPANDABLE CARD BEHAVIOR:
         * - In "All Patterns" view: Cards expand to full width (100% container width)
         * - In specific filter views: Cards expand normally (maintain grid width)
         * - Only one card can be expanded at a time in "All Patterns" view
         * - Smooth CSS transitions for all expansion/collapse animations
         */

        // Badge definitions - emojis replaced with SVG icons
        const badges = {
            first_solve: { 
                name: 'First Solve', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`, 
                condition: () => progressState.solvedProblems >= 1 
            },
            problem_10: { 
                name: '10 Problems', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`, 
                condition: () => progressState.solvedProblems >= 10 
            },
            problem_50: { 
                name: '50 Problems', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`, 
                condition: () => progressState.solvedProblems >= 50 
            },
            problem_100: { 
                name: '100 Problems', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`, 
                condition: () => progressState.solvedProblems >= 100 
            },
            streak_7: { 
                name: '7 Day Streak', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>`, 
                condition: () => progressState.currentStreak >= 7 
            },
            streak_30: { 
                name: '30 Day Streak', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>`, 
                condition: () => progressState.currentStreak >= 30 
            },
            pattern_master: { 
                name: 'Pattern Master', 
                icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M5 16L3 5h5.5l1.5 9 1.5-9H17l-2 11H5z"/></svg>`, 
                condition: () => {
                    return Object.entries(progressState.completedByTopic).every(([topic, completed]) => {
                        const topicTotals = {
                            'Arrays': 11, 'Voting Algorithm': 2, 'Hashing': 6, 'Binary Search': 11,
                            'Recursion': 3, 'Backtracking': 2, 'LinkedList': 9, 'Greedy Algorithms': 5,
                            'Sliding Window': 8, 'Stack/Queue': 6, 'Binary Tree': 13, 'Binary Search Tree': 6,
                            'Heaps': 6, 'Graphs': 25, 'Dynamic Programming': 23, 'Tries': 5
                        };
                        const total = topicTotals[topic] || 0;
                        return total === 0 || completed >= Math.ceil(total * 0.8); // 80% of each pattern
                    });
                }
            }
        };

        // Initialize the application
        function init() {
            loadUserData();
            renderPatterns();
            initializeCheckboxes();
            initializeProblems();
            updateAllTopicsProgress();
            renderCalendarHeatmap();
            renderBadges();
            // renderBadgesMini(); - removed from sidebar
            updateStreakDisplay();
            checkAchievements();
            setupEventListeners();
            initResponsive();
        }

        // Initialize all problems as uncompleted
        function initializeProblems() {
            const allProblems = document.querySelectorAll('.problem-item');
            
            allProblems.forEach(problem => {
                // Remove completed class if it exists
                problem.classList.remove('completed');
                
                // Set checkbox to unchecked state
                const checkbox = problem.querySelector('.status-checkbox');
                if (checkbox) {
                    checkbox.checked = false;
                    checkbox.parentElement.classList.remove('checked');
                }
            });
        }

        // Update All Topics progress
        function updateAllTopicsProgress() {
            const totalProblems = 141;
            const solvedProblems = getSolvedCount();
            
            const allTopicsItem = document.querySelector('.topic-item:first-child');
            if (allTopicsItem) {
                const progressSpan = allTopicsItem.querySelector('.topic-progress');
                const progressFill = allTopicsItem.querySelector('.progress-fill');
                
                if (progressSpan) {
                    progressSpan.textContent = `${solvedProblems}/${totalProblems}`;
                }
                
                if (progressFill) {
                    const percentage = totalProblems > 0 ? (solvedProblems / totalProblems) * 100 : 0;
                    progressFill.style.width = percentage + '%';
                }
            }
        }

        function getSolvedCount() {
            return progressState.completedProblems.size;
        }

        // Load user progress and data
        function loadUserData() {
            // Load theme preference and apply immediately to prevent flash
            const savedTheme = false; // Simulated theme preference
            userData.darkMode = savedTheme;
            
            // Apply theme immediately before any rendering
            document.documentElement.classList.toggle('dark-mode', userData.darkMode);
            document.body.classList.toggle('dark-mode', userData.darkMode);
            
            // Initialize with zero progress - all counters start at 0
            progressState.solvedProblems = 0;
            progressState.currentStreak = 0;
            progressState.longestStreak = 0;
            
            // Clear all completed problems to ensure clean start
            progressState.completedProblems.clear();
            
            // Reset all topic counts to 0
            Object.keys(progressState.completedByTopic).forEach(topic => {
                progressState.completedByTopic[topic] = 0;
            });
            
            // Simulate some activity for the calendar
            const today = new Date();
            for (let i = 0; i < 90; i++) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                userData.activityLog.push({
                    date: date.toDateString(),
                    count: Math.floor(Math.random() * 5)
                });
            }

            // Update all displays
            updateAllProgressDisplays();
        }

        // Initialize checkboxes on page load
        function initializeCheckboxes() {
            // All problems start as uncompleted (no localStorage in sandbox)
            document.querySelectorAll('.problem-checkbox').forEach(checkbox => {
                checkbox.checked = false;
                checkbox.closest('.problem-item').classList.remove('completed');
            });
        }

        // Handle checkbox change - FIXED IMPLEMENTATION
        function handleCheckboxChange(checkbox) {
            const problemId = checkbox.dataset.problemId;
            const topic = checkbox.dataset.topic;
            const problemItem = checkbox.closest('.problem-item');
            
            if (checkbox.checked) {
                // Mark as completed
                if (!progressState.completedProblems.has(problemId)) {
                    progressState.completedProblems.add(problemId);
                    problemItem.classList.add('completed');
                    
                    // Increment counts
                    progressState.solvedProblems++;
                    progressState.completedByTopic[topic] = (progressState.completedByTopic[topic] || 0) + 1;
                }
            } else {
                // Mark as uncompleted
                if (progressState.completedProblems.has(problemId)) {
                    progressState.completedProblems.delete(problemId);
                    problemItem.classList.remove('completed');
                    
                    // Decrement counts
                    progressState.solvedProblems--;
                    progressState.completedByTopic[topic] = Math.max((progressState.completedByTopic[topic] || 0) - 1, 0);
                }
            }
            
            // Update all displays immediately
            updateAllProgressDisplays();
            updateAllTopicsProgress();
            checkAchievements();
        }

        // Update all progress displays
        function updateAllProgressDisplays() {
            // Navbar - only update streak (solved count removed)
            const navStreakCount = document.getElementById('navStreakCount');
            if (navStreakCount) navStreakCount.textContent = progressState.currentStreak;
            
            // Quick Stats
            const solvedCount = document.getElementById('solvedCount');
            if (solvedCount) solvedCount.textContent = progressState.solvedProblems;
            
            const successRate = progressState.totalProblems > 0 
                ? Math.round((progressState.solvedProblems / progressState.totalProblems) * 100) 
                : 0;
            const successRateElem = document.getElementById('successRate');
            if (successRateElem) successRateElem.textContent = successRate + '%';
            
            const currentStreakStat = document.getElementById('currentStreakStat');
            if (currentStreakStat) currentStreakStat.textContent = progressState.currentStreak;
            
            // Update topic progress in sidebar
            updateTopicProgress();
            
            // Update pattern cards
            renderPatterns();
        }

        // Update topic progress in sidebar
        function updateTopicProgress() {
            const topicMappings = {
                'Arrays': { selector: '.topic-item:nth-child(2)', total: 11 },
                'Voting Algorithm': { selector: '.topic-item:nth-child(3)', total: 2 },
                'Hashing': { selector: '.topic-item:nth-child(4)', total: 6 },
                'Binary Search': { selector: '.topic-item:nth-child(5)', total: 11 },
                'Recursion': { selector: '.topic-item:nth-child(6)', total: 3 },
                'Backtracking': { selector: '.topic-item:nth-child(7)', total: 2 },
                'LinkedList': { selector: '.topic-item:nth-child(8)', total: 9 },
                'Greedy Algorithms': { selector: '.topic-item:nth-child(9)', total: 5 },
                'Sliding Window': { selector: '.topic-item:nth-child(10)', total: 8 },
                'Stack/Queue': { selector: '.topic-item:nth-child(11)', total: 6 },
                'Binary Tree': { selector: '.topic-item:nth-child(12)', total: 13 },
                'Binary Search Tree': { selector: '.topic-item:nth-child(13)', total: 6 },
                'Heaps': { selector: '.topic-item:nth-child(14)', total: 6 },
                'Graphs': { selector: '.topic-item:nth-child(15)', total: 25 },
                'Dynamic Programming': { selector: '.topic-item:nth-child(16)', total: 23 },
                'Tries': { selector: '.topic-item:nth-child(17)', total: 5 }
            };
            
            Object.entries(topicMappings).forEach(([topic, config]) => {
                const topicElement = document.querySelector(config.selector);
                if (topicElement) {
                    const completed = progressState.completedByTopic[topic] || 0;
                    const progressSpan = topicElement.querySelector('.topic-progress');
                    const progressFill = topicElement.querySelector('.progress-fill');
                    
                    if (progressSpan) {
                        progressSpan.textContent = `${completed}/${config.total}`;
                    }
                    
                    if (progressFill) {
                        const percentage = (completed / config.total) * 100;
                        progressFill.style.width = percentage + '%';
                    }
                }
            });
        }

        // Render pattern cards
        // Helper functions
        function getUserProblemStatus(problemName) {
            const problemId = problemName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            return progressState.completedProblems.has(problemId) ? 'completed' : 'not-started';
        }

        function getProblemCompanies(problemName) {
            return companiesData.problems_companies_mapping[problemName] || [];
        }

        function getCompanyBadgeClass(company) {
            return company.toLowerCase().replace(/\s+/g, '-');
        }

        function renderCompanyBadges(companies) {
            if (!companies || companies.length === 0) return '';
            
            return `
                <div class="company-badges">
                    ${companies.slice(0, 5).map(company => 
                        `<span class="company-badge ${getCompanyBadgeClass(company)}" 
                               onclick="selectCompanyFilter('${company}')" 
                               title="Filter by ${company}">${company}</span>`
                    ).join('')}
                </div>
            `;
        }

        function selectCompanyFilter(company) {
            document.getElementById('companyFilter').value = company;
            filterByCompany();
        }
        
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        
        function quickBookmark(problemName) {
            const isBookmarked = userData.bookmarkedProblems.has(problemName);
            const bookmarkBtn = document.querySelector(`[data-problem="${problemName}"]`);
            
            if (isBookmarked) {
                userData.bookmarkedProblems.delete(problemName);
                if (bookmarkBtn) {
                    bookmarkBtn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
                }
            } else {
                userData.bookmarkedProblems.add(problemName);
                if (bookmarkBtn) {
                    bookmarkBtn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
                }
            }
        }

        function applyAllFilters() {
            renderPatterns();
        }

        function renderPatterns() {
            const patternsGrid = document.querySelector('.patterns-grid');
            patternsGrid.innerHTML = '';

            let totalVisibleProblems = 0;
            let filteredProblems = 0;

            Object.entries(dsaPatterns).forEach(([key, pattern]) => {
                // Topic filter
                if (currentFilter !== 'all' && key !== currentFilter) return;
                
                // Filter problems by company and difficulty
                const filteredPatternProblems = pattern.problems.filter(problem => {
                    const problemCompanies = getProblemCompanies(problem.name);
                    const companyMatch = currentCompanyFilter === 'all' || problemCompanies.includes(currentCompanyFilter);
                    const difficultyMatch = currentDifficultyFilter === 'all' || problem.difficulty.toLowerCase() === currentDifficultyFilter.toLowerCase();
                    
                    if (companyMatch && difficultyMatch) {
                        totalVisibleProblems++;
                        if (currentFilter !== 'all') filteredProblems++;
                    }
                    
                    return companyMatch && difficultyMatch;
                });
                
                // Skip pattern if no problems match filters
                if (filteredPatternProblems.length === 0) return;
                
                const solvedCount = filteredPatternProblems.filter(p => {
                    const problemId = p.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                    return progressState.completedProblems.has(problemId);
                }).length;
                const totalCount = filteredPatternProblems.length;
                const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

                const card = document.createElement('div');
                const isExpanded = expandedCards.has(key);
                const isAllFiltersView = currentFilter === 'all';
                
                // Apply different classes based on view mode and expansion state
                let cardClasses = 'pattern-card';
                if (isExpanded) {
                    if (isAllFiltersView) {
                        cardClasses += ' expanded expanded-full-width';
                    } else {
                        cardClasses += ' expanded';
                    }
                } else {
                    cardClasses += ' collapsed';
                }
                
                card.className = cardClasses;
                card.dataset.category = key;

                card.innerHTML = `
                    <div class="pattern-header">
                        <div style="display: flex; align-items: center;">
                            <div class="pattern-icon" style="background: ${pattern.background}">
                                ${pattern.icon}
                            </div>
                            <div style="flex: 1;">
                                <div class="pattern-title">${pattern.name}</div>
                                <div class="pattern-count">${solvedCount}/${totalCount} problems • ${progressPercent}% complete</div>
                                <div class="progress-bar" style="margin-top: 8px;">
                                    <div class="progress-fill" style="width: ${progressPercent}%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="expand-icon">+</div>
                    </div>
                    <div class="pattern-description">${pattern.description}</div>
                    <div class="problems-list">
                        ${filteredPatternProblems.map(problem => `
                            <div class="problem-item" data-problem-id="${problem.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}" data-topic="${pattern.name}">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <label class="checkbox-wrapper">
                                        <input type="checkbox" class="problem-checkbox" 
                                               data-problem-id="${problem.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}"
                                               data-topic="${pattern.name}"
                                               onchange="handleCheckboxChange(this)">
                                        <span class="checkbox-custom"></span>
                                    </label>
                                    <div>
                                        <div class="problem-name">${problem.name}</div>
                                        ${renderCompanyBadges(getProblemCompanies(problem.name))}
                                        ${userData.problemTimes[problem.name] ? `<div style="font-size: 10px; color: var(--color-text-secondary);">Time: ${formatTime(userData.problemTimes[problem.name])}</div>` : ''}
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <button class="bookmark-btn" data-problem="${problem.name}" 
                                            onclick="event.stopPropagation(); quickBookmark('${problem.name}')" 
                                            style="padding: 4px; font-size: 12px;">
                                        ${userData.bookmarkedProblems.has(problem.name) ? '⭐' : '☆'}
                                    </button>
                                    <button class="video-btn" 
                                            onclick="event.stopPropagation(); openVideoModal('${problem.name}', '${problem.video || ''}')" title="Watch video solution">Video</button>
                                    <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
                                    <a href="${problem.link}" target="_blank" rel="noopener noreferrer" class="solve-btn" 
                                       onclick="event.stopPropagation()" title="Solve on LeetCode">Solve</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;

                card.addEventListener('click', (e) => {
                    if (e.target.closest('.problem-link')) return;
                    toggleCard(key);
                });

                patternsGrid.appendChild(card);
            });

            // Update filter status
            updateFilterStatus(totalVisibleProblems);
        }

        // Update filter status display
        function updateFilterStatus(totalProblems) {
            const filterStatus = document.getElementById('filterStatus');
            let statusText = '';
            
            const patternName = currentFilter !== 'all' ? dsaPatterns[currentFilter]?.name : 'all patterns';
            const companyText = currentCompanyFilter !== 'all' ? currentCompanyFilter : 'all companies';
            const difficultyText = currentDifficultyFilter !== 'all' ? currentDifficultyFilter : 'all difficulties';
            
            if (currentFilter === 'all' && currentCompanyFilter === 'all' && currentDifficultyFilter === 'all') {
                statusText = `Showing all ${totalProblems} problems`;
            } else {
                const filters = [];
                if (currentFilter !== 'all') filters.push(patternName);
                if (currentCompanyFilter !== 'all') filters.push(companyText);
                if (currentDifficultyFilter !== 'all') filters.push(difficultyText);
                
                statusText = `Showing ${totalProblems} problems: ${filters.join(' • ')}`;
            }
            
            if (totalProblems === 0) {
                statusText = 'No problems found with current filters. Try different filter combinations.';
            }
            
            filterStatus.textContent = statusText;
        }

        // Company filter function
        function filterByCompany() {
            applyAllFilters();
        }
        
        // New dropdown functions
        let dropdownOpen = false;

        function toggleDropdown(type) {
            if (type === 'company') {
                const menu = document.getElementById('companyDropdownMenu');
                const diffMenu = document.getElementById('difficultyDropdownMenu');
                diffMenu?.classList.remove('active');
                menu.classList.toggle('active');
            } else if (type === 'difficulty') {
                const menu = document.getElementById('difficultyDropdownMenu');
                const compMenu = document.getElementById('companyDropdownMenu');
                compMenu?.classList.remove('active');
                menu.classList.toggle('active');
            }
        }

        function selectCompany(value, displayName) {
            document.getElementById('selectedCompany').textContent = displayName;
            document.getElementById('companyDropdownMenu').classList.remove('active');
            
            // Apply filter
            currentCompanyFilter = value;
            applyAllFilters();
            
            // Highlight selected option
            document.querySelectorAll('#companyDropdownMenu .dropdown-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            document.querySelector(`#companyDropdownMenu [data-value="${value}"]`)?.classList.add('selected');
        }

        function selectDifficulty(value, displayName) {
            document.getElementById('selectedDifficulty').textContent = displayName;
            document.getElementById('difficultyDropdownMenu').classList.remove('active');
            
            currentDifficultyFilter = value;
            applyAllFilters();
            
            // Update selected state
            document.querySelectorAll('#difficultyDropdownMenu .dropdown-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            document.querySelector(`#difficultyDropdownMenu [data-value="${value}"]`)?.classList.add('selected');
        }

        // Track toggle state
        let allCardsExpanded = true;

        // Single toggle function
        function toggleAllCards() {
            const visibleCards = document.querySelectorAll('.pattern-card:not([style*="display: none"])');
            const btn = document.getElementById('toggleCardsBtn');
            const icon = document.getElementById('toggleIcon');
            const text = document.getElementById('toggleText');
            
            if (allCardsExpanded) {
                // Collapse all
                expandedCards.clear();
                
                // Update button
                icon.innerHTML = '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>';
                text.textContent = 'Expand All';
                allCardsExpanded = false;
            } else {
                // Expand all
                visibleCards.forEach(card => {
                    const category = card.dataset.category;
                    if (!expandedCards.has(category)) {
                        expandedCards.add(category);
                    }
                });
                
                // Update button
                icon.innerHTML = '<path d="M19 13H5v-2h14v2z"/>';
                text.textContent = 'Collapse All';
                allCardsExpanded = true;
            }
            
            renderPatterns();
        }

        // Toggle card expansion with full-width behavior for "All Patterns" view
        function toggleCard(key) {
            const isAllFiltersView = currentFilter === 'all';
            const wasExpanded = expandedCards.has(key);
            
            if (isAllFiltersView) {
                // Full-width expansion behavior for "All Patterns" view
                if (expandedCards.has(key)) {
                    // Collapse: remove from expanded cards
                    expandedCards.delete(key);
                } else {
                    // First, collapse all other cards (only one expanded at a time)
                    expandedCards.clear();
                    
                    // Expand clicked card
                    expandedCards.add(key);
                }
            } else {
                // Specific filter view - normal toggle behavior (no full-width expansion)
                if (expandedCards.has(key)) {
                    expandedCards.delete(key);
                } else {
                    expandedCards.add(key);
                }
            }
            
            renderPatterns();
            
            // CRITICAL UX FIX: Auto-scroll to expanded card after animation completes
            if (isAllFiltersView && !wasExpanded && expandedCards.has(key)) {
                // Wait for expansion animation to complete (300ms CSS transition + buffer)
                setTimeout(() => {
                    const expandedCard = document.querySelector(`[data-category="${key}"]`);
                    if (expandedCard && expandedCard.classList.contains('expanded-full-width')) {
                        scrollToCard(expandedCard);
                    }
                }, 350);
            }
        }

        // CRITICAL UX FIX: Auto-scroll function for expanded cards
        function scrollToCard(card) {
            // Get sticky header height for offset calculation
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            
            // Tweak this number if you want the card positioned lower/higher on the screen
            const breathingRoom = 75;

            // Calculate card position
            const cardRect = card.getBoundingClientRect();
            const cardTop = cardRect.top + window.pageYOffset;
            const scrollPosition = Math.max(cardTop - headerHeight - breathingRoom, 0);
            
            // Smooth scroll to calculated position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Theme toggle
            document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
            
            // Search functionality
            document.getElementById('searchInput').addEventListener('input', handleSearch);
            
            // Roadmap selector
            document.querySelectorAll('.roadmap-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.roadmap-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    userData.selectedRoadmap = option.dataset.roadmap;
                });
            });
            
            // Status selector in modal
            document.querySelectorAll('.status-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.status-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    if (currentProblem) {
                        userData.problemStatus[currentProblem.name] = option.dataset.status;
                        const problemId = currentProblem.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                        
                        if (option.dataset.status === 'completed' || option.dataset.status === 'mastered') {
                            if (!progressState.completedProblems.has(problemId)) {
                                progressState.completedProblems.add(problemId);
                                progressState.solvedProblems++;
                                updateAllProgressDisplays();
                                checkAchievements();
                            }
                        } else {
                            if (progressState.completedProblems.has(problemId)) {
                                progressState.completedProblems.delete(problemId);
                                progressState.solvedProblems--;
                                updateAllProgressDisplays();
                                checkAchievements();
                            }
                        }
                    }
                });
            });

            // Topic filter items (combined progress + filter)
            document.querySelectorAll('.topic-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Get the topic key from the onclick attribute or data
                    const topicName = item.querySelector('.topic-name').textContent;
                    let topicKey = 'all';
                    
                    // Map topic names to keys
                    if (topicName === 'All Topics') topicKey = 'all';
                    else if (topicName === 'Arrays') topicKey = 'arrays';
                    else if (topicName === 'Voting Algorithm') topicKey = 'voting';
                    else if (topicName === 'Hashing') topicKey = 'hashing';
                    else if (topicName === 'Binary Search') topicKey = 'binary-search';
                    else if (topicName === 'Recursion') topicKey = 'recursion';
                    else if (topicName === 'Backtracking') topicKey = 'backtracking';
                    else if (topicName === 'LinkedList') topicKey = 'linkedlist';
                    else if (topicName === 'Greedy') topicKey = 'greedy';
                    else if (topicName === 'Sliding Window') topicKey = 'sliding-window';
                    else if (topicName === 'Stack/Queue') topicKey = 'stack-queue';
                    else if (topicName === 'Binary Tree') topicKey = 'binary-tree';
                    else if (topicName === 'Binary Search Tree') topicKey = 'binary-search-tree';
                    else if (topicName === 'Heaps') topicKey = 'heaps';
                    else if (topicName === 'Graphs') topicKey = 'graphs';
                    else if (topicName === 'Dynamic Programming') topicKey = 'dp';
                    else if (topicName === 'Tries') topicKey = 'tries';
                    
                    filterByTopic(topicKey);
                });
            });

            // Company search functionality
            const companySearchInput = document.getElementById('companySearch');
            if (companySearchInput) {
                companySearchInput.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    document.querySelectorAll('.dropdown-option').forEach(option => {
                        const text = option.textContent.toLowerCase();
                        option.style.display = text.includes(searchTerm) ? 'flex' : 'none';
                    });
                });
            }

            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.custom-dropdown')) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('active');
                    });
                    dropdownOpen = false;
                }
            });

            // Modal close on backdrop click
            document.getElementById('problemModal').addEventListener('click', (e) => {
                if (e.target.id === 'problemModal') {
                    closeModal();
                }
            });
            
            // Video modal close on backdrop click and ESC key
            document.getElementById('videoModal').addEventListener('click', (e) => {
                if (e.target.id === 'videoModal') {
                    closeVideoModal();
                }
            });
            
            // Add ESC key support for video modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const videoModal = document.getElementById('videoModal');
                    if (videoModal && videoModal.style.display === 'flex') {
                        closeVideoModal();
                    }
                }
            }, true);

            // Notes auto-save
            document.getElementById('problemNotes').addEventListener('input', (e) => {
                if (currentProblem) {
                    userData.problemNotes[currentProblem.name] = e.target.value;
                }
            });
        }

        // Open problem modal
        function openProblemModal(name, link, difficulty) {
            currentProblem = { name, link, difficulty };
            
            const modal = document.getElementById('problemModal');
            const title = document.getElementById('modalTitle');
            const description = document.getElementById('modalDescription');
            const modalLink = document.getElementById('modalLink');
            const notes = document.getElementById('problemNotes');
            const bookmarkBtn = document.getElementById('modalBookmark');
            
            title.textContent = name;
            const problemCompanies = getProblemCompanies(name);
            description.innerHTML = `
                <p>Difficulty: <span class="difficulty ${difficulty}">${difficulty.toUpperCase()}</span></p>
                ${problemCompanies.length > 0 ? `
                    <div style="margin: 12px 0;">
                        <strong>🏢 Asked at these companies:</strong>
                        ${renderCompanyBadges(problemCompanies)}
                    </div>
                ` : ''}
                <p>This problem is part of our curated DSA pattern collection. Click "Solve Problem" to open it in a new tab and start coding!</p>
                <p>Practice this problem to strengthen your understanding of the pattern and improve your problem-solving skills.</p>
                <p style="font-size: 14px; color: var(--color-text-secondary); margin-top: 16px;">💡 <strong>Tip:</strong> Use the timer to track your problem-solving speed and take notes for future reference!</p>
            `;
            modalLink.href = link;
            
            // Load saved notes
            notes.value = userData.problemNotes[name] || '';
            
            // Set bookmark state
            const isBookmarked = userData.bookmarkedProblems.has(name);
            bookmarkBtn.innerHTML = isBookmarked ? 
                `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>` : 
                `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
            bookmarkBtn.classList.toggle('active', isBookmarked);
            
            // Set status
            const status = userData.problemStatus[name] || 'not-started';
            document.querySelectorAll('.status-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.status === status);
            });
            
            // Reset timer display
            resetTimer();
            
            modal.classList.add('active');
        }

        // Close modal
        function closeModal() {
            document.getElementById('problemModal').classList.remove('active');
            
            // Save timer data if problem was being solved
            if (currentProblem && currentTimer.elapsed > 0) {
                userData.problemTimes[currentProblem.name] = 
                    (userData.problemTimes[currentProblem.name] || 0) + currentTimer.elapsed;
            }
            
            resetTimer();
            currentProblem = null;
        }
        
        // Video modal functions - FIXED for proper ID extraction
        function extractYouTubeVideoId(url) {
            if (!url || typeof url !== 'string') return null;
            
            // Remove whitespace
            url = url.trim();
            
            // Pattern 1: youtube.com/watch?v=VIDEO_ID
            let match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
            if (match) return match[1];
            
            // Pattern 2: youtu.be/VIDEO_ID
            match = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
            if (match) return match[1];
            
            // Pattern 3: youtube.com/embed/VIDEO_ID
            match = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
            if (match) return match[1];
            
            // Pattern 4: youtube.com/v/VIDEO_ID
            match = url.match(/youtube\.com\/v\/([a-zA-Z0-9_-]{11})/);
            if (match) return match[1];
            
            // If no match, return null
            return null;
        }
        
        function openVideoModal(problemName, videoUrl) {
            const modal = document.getElementById('videoModal');
            const modalContent = document.getElementById('videoModalContent');
            
            if (!modal || !modalContent) return;
            
            // Extract video ID
            const videoId = extractYouTubeVideoId(videoUrl);
            
            if (videoId) {
                // Valid video ID found - create embed
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                
                modalContent.innerHTML = `
                    <div class="video-modal-header">
                        <h3>${problemName}</h3>
                        <button class="close-btn" onclick="closeVideoModal()">✕</button>
                    </div>
                    <div class="video-wrapper">
                        <iframe 
                            id="youtube-player"
                            src="${embedUrl}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            referrerpolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                    <div class="video-footer">
                        <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff0000">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            Having trouble? Watch on YouTube
                        </a>
                    </div>
                `;
            } else {
                // No valid video ID - show fallback
                modalContent.innerHTML = `
                    <div class="video-modal-header">
                        <h3>${problemName}</h3>
                        <button class="close-btn" onclick="closeVideoModal()">✕</button>
                    </div>
                    <div class="video-error">
                        <p>Unable to embed this video.</p>
                        <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link-large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff0000">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            Open Video on YouTube
                        </a>
                    </div>
                `;
            }
            
            // Show modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Video tracking removed - users can watch videos without tracking
        }
        
        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = ''; // Restore scrolling
                
                // Clear iframe to stop video playback
                const modalContent = document.getElementById('videoModalContent');
                if (modalContent) {
                    modalContent.innerHTML = '';
                }
            }
        }

        // Mobile sidebar functions
        function toggleLeftSidebar() {
            const sidebar = document.querySelector('.left-sidebar');
            sidebar.classList.toggle('active');
        }

        function toggleRightSidebar() {
            const sidebar = document.querySelector('.right-sidebar');
            sidebar.classList.toggle('active');
        }

        function toggleMobileMenu() {
            const navContent = document.querySelector('.nav-content');
            const toggle = document.querySelector('.mobile-menu-toggle');
            navContent.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        // Combined topic filter function
        function filterByTopic(topicKey) {
            // Update active topic item
            document.querySelectorAll('.topic-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Find and activate clicked topic
            const clickedItem = event.target.closest('.topic-item');
            if (clickedItem) {
                clickedItem.classList.add('active');
            }
            
            // Apply filter
            currentFilter = topicKey;
            
            // Reset all expansions when filter changes
            expandedCards.clear();
            
            // Auto-expand cards when specific filter is selected
            if (currentFilter !== 'all') {
                expandedCards.add(currentFilter);
            }
            
            renderPatterns();
        }

        // Close sidebars when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.left-sidebar') && !e.target.closest('.sidebar-toggle-left')) {
                    document.querySelector('.left-sidebar')?.classList.remove('active');
                }
                if (!e.target.closest('.right-sidebar') && !e.target.closest('.sidebar-toggle-right')) {
                    document.querySelector('.right-sidebar')?.classList.remove('active');
                }
                if (!e.target.closest('.nav-content') && !e.target.closest('.mobile-menu-toggle')) {
                    document.querySelector('.nav-content')?.classList.remove('active');
                }
            }
        });

        // Dark Mode Toggle - COMPLETE WORKING VERSION
        (function() {
            'use strict';
            
            // Check for saved preference, default to light mode
            const savedTheme = 'light'; // Simulate localStorage in sandbox
            
            // Apply theme immediately on page load (before DOM ready)
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark-mode');
            }
            
            // Function to toggle dark mode
            window.toggleDarkMode = function() {
                const html = document.documentElement;
                const isDark = html.classList.toggle('dark-mode');
                
                // Update userData
                userData.darkMode = isDark;
                
                // Update icon
                updateIcon(isDark);
            };
            
            // Function to update icon
            function updateIcon(isDark) {
                const icon = document.getElementById('darkModeIcon');
                if (!icon) return;
                
                if (isDark) {
                    // Sun icon (for switching to light)
                    icon.innerHTML = `
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                    `;
                } else {
                    // Moon icon (for switching to dark)
                    icon.innerHTML = `
                        <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/>
                    `;
                }
            }
            
            // Initialize icon on load
            document.addEventListener('DOMContentLoaded', function() {
                updateIcon(savedTheme === 'dark');
            });
        })();

        function handleSearch(e) {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.pattern-card');
            
            cards.forEach(card => {
                const title = card.querySelector('.pattern-title').textContent.toLowerCase();
                const problems = card.querySelectorAll('.problem-name');
                let hasMatch = title.includes(query);
                
                problems.forEach(problem => {
                    if (problem.textContent.toLowerCase().includes(query)) {
                        hasMatch = true;
                    }
                });
                
                card.style.display = hasMatch ? 'block' : 'none';
            });
        }

        function setDailyGoal(goal) {
            // Daily goal functionality removed
            return;
        }

        function toggleBookmark() {
            if (!currentProblem) return;
            
            const isBookmarked = userData.bookmarkedProblems.has(currentProblem.name);
            const bookmarkBtn = document.getElementById('modalBookmark');
            
            if (isBookmarked) {
                userData.bookmarkedProblems.delete(currentProblem.name);
                bookmarkBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
                bookmarkBtn.classList.remove('active');
            } else {
                userData.bookmarkedProblems.add(currentProblem.name);
                bookmarkBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
                bookmarkBtn.classList.add('active');
            }
        }

        function startTimer() {
            if (!currentTimer.running) {
                currentTimer.running = true;
                currentTimer.startTime = Date.now() - currentTimer.elapsed;
                currentTimer.interval = setInterval(updateTimerDisplay, 1000);
                document.getElementById('timerStart').textContent = 'Resume';
            }
        }

        function pauseTimer() {
            if (currentTimer.running) {
                currentTimer.running = false;
                clearInterval(currentTimer.interval);
                currentTimer.elapsed = Date.now() - currentTimer.startTime;
                document.getElementById('timerStart').textContent = 'Start';
            }
        }

        function resetTimer() {
            currentTimer.running = false;
            clearInterval(currentTimer.interval);
            currentTimer.elapsed = 0;
            currentTimer.startTime = null;
            document.getElementById('timerDisplay').textContent = '00:00';
            document.getElementById('timerStart').textContent = 'Start';
        }

        function updateTimerDisplay() {
            if (currentTimer.running) {
                const elapsed = Date.now() - currentTimer.startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                document.getElementById('timerDisplay').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }

        function showShortcuts() {
            document.getElementById('shortcutsHelp').classList.add('active');
        }

        function closeShortcuts() {
            document.getElementById('shortcutsHelp').classList.remove('active');
        }

        function updateStats() {
            // Use progressState instead of userData for progress tracking
            const navStreakCount = document.getElementById('navStreakCount');
            if (navStreakCount) navStreakCount.textContent = progressState.currentStreak;
            
            const totalProblemsElem = document.getElementById('totalProblems');
            if (totalProblemsElem) totalProblemsElem.textContent = progressState.totalProblems;
            
            const completionRate = progressState.totalProblems > 0 ? Math.round((progressState.solvedProblems / progressState.totalProblems) * 100) : 0;
            
            // Update new Quick Stats elements
            const solvedCount = document.getElementById('solvedCount');
            if (solvedCount) solvedCount.textContent = progressState.solvedProblems;
            
            const successRate = document.getElementById('successRate');
            if (successRate) successRate.textContent = `${completionRate}%`;
            
            const currentStreakStat = document.getElementById('currentStreakStat');
            if (currentStreakStat) currentStreakStat.textContent = progressState.currentStreak;
            
            // Daily goal removed - no updates needed
            
            // Check for new badges
            Object.entries(badges).forEach(([key, badge]) => {
                if (badge.condition() && !userData.badges.has(key)) {
                    userData.badges.add(key);
                    // Could show a notification here
                }
            });
            
            // Remove totalBadges reference as it doesn't exist in current HTML
            
            // Update achievement badges in right sidebar
            renderBadges();
            // renderBadgesMini(); - badges removed
            // updateStreakDisplay(); - streak section removed
        }

        function renderBadges() {
            const container = document.getElementById('badgesContainer');
            if (!container) return;
            
            // Use the existing modern gradient achievement items from HTML
            // Update their states based on user progress
            const achievements = container.querySelectorAll('.achievement-item');
            const badgeArray = Object.entries(badges);
            
            achievements.forEach((achievementEl, index) => {
                if (index < badgeArray.length) {
                    const [key, badge] = badgeArray[index];
                    const isEarned = badge.condition();
                    
                    // Update earned state
                    achievementEl.classList.toggle('locked', !isEarned);
                    
                    // Update achievement info if needed
                    const nameEl = achievementEl.querySelector('.achievement-name');
                    const descEl = achievementEl.querySelector('.achievement-desc');
                    
                    if (nameEl) nameEl.textContent = badge.name;
                    if (descEl) {
                        const descriptions = {
                            'first_solve': 'Solve your first problem',
                            'problem_10': 'Solve 10 problems', 
                            'problem_50': 'Solve 50 problems',
                            'problem_100': 'Solve 100 problems',
                            'streak_7': 'Maintain a 7-day streak',
                            'streak_30': 'Maintain a 30-day streak',
                            'pattern_master': 'Master all patterns'
                        };
                        descEl.textContent = descriptions[key] || 'Complete the challenge';
                    }
                }
            });
        }

        function renderCalendarHeatmap() {
            const container = document.getElementById('calendarHeatmap');
            container.innerHTML = '';
            
            const today = new Date();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
            
            // Show current month and 2 previous months (3 months total)
            for (let monthOffset = 2; monthOffset >= 0; monthOffset--) {
                const currentDate = new Date(today.getFullYear(), today.getMonth() - monthOffset, 1);
                const monthName = months[currentDate.getMonth()];
                const year = currentDate.getFullYear();
                
                // Create month container
                const monthContainer = document.createElement('div');
                monthContainer.className = 'heatmap-month';
                
                // Add month label
                const monthLabel = document.createElement('div');
                monthLabel.className = 'heatmap-month-label';
                monthLabel.textContent = `${monthName} ${year}`;
                monthContainer.appendChild(monthLabel);
                
                // Create grid for days
                const monthGrid = document.createElement('div');
                monthGrid.className = 'heatmap-grid';
                
                // Get days in month
                const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
                
                // Add empty cells for days before month starts
                for (let i = 0; i < firstDay; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.style.width = '14px';
                    emptyDay.style.height = '14px';
                    monthGrid.appendChild(emptyDay);
                }
                
                // Add days of the month
                for (let day = 1; day <= daysInMonth; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day';
                    
                    // Simulate activity levels based on user's activity log
                    const activity = Math.floor(Math.random() * 5);
                    if (activity > 0) {
                        dayElement.classList.add(`active-${activity}`);
                    }
                    
                    // Add tooltip with date
                    const dateStr = `${year}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                    dayElement.title = dateStr;
                    
                    monthGrid.appendChild(dayElement);
                }
                
                monthContainer.appendChild(monthGrid);
                container.appendChild(monthContainer);
            }
        }

        function renderBadgesMini() {
            // Badges mini removed from left sidebar
        }

        function updateStreakDisplay() {
            // Streak display removed from sidebar - only update navbar and Quick Stats
            // The streak is now only shown in navbar and Quick Stats in left sidebar
        }

        // Check for achievements
        function checkAchievements() {
            Object.entries(badges).forEach(([key, badge]) => {
                if (badge.condition() && !userData.badges.has(key)) {
                    userData.badges.add(key);
                    // Could show achievement notification here
                }
            });
            
            // Update badge displays in right sidebar only
            renderBadges();
            // renderBadgesMini(); - removed from left sidebar
        }

        // Initialize app when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            init();
            // Ensure proper initialization after DOM is ready
            setTimeout(() => {
                initializeCheckboxes();
                initializeProblems();
                updateAllTopicsProgress();
            }, 100);
        });
        
        // Handle window resize for responsive behavior
        window.addEventListener('resize', () => {
            // Close mobile menu and sidebars on resize to desktop
            if (window.innerWidth > 768) {
                document.querySelector('.nav-content')?.classList.remove('active');
                document.querySelector('.left-sidebar')?.classList.remove('active');
                document.querySelector('.right-sidebar')?.classList.remove('active');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Don't trigger shortcuts when typing in inputs
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            switch(e.key) {
                case 'Escape':
                    const videoModal = document.getElementById('videoModal');
                    if (videoModal && videoModal.style.display === 'flex') {
                        closeVideoModal();
                    } else {
                        closeModal();
                        closeShortcuts();
                    }
                    break;
                case '/':
                    e.preventDefault();
                    document.getElementById('searchInput').focus();
                    break;
                case 'd':
                    e.preventDefault();
                    toggleTheme();
                    break;
                case 'b':
                    e.preventDefault();
                    if (currentProblem) toggleBookmark();
                    break;
                case 't':
                    e.preventDefault();
                    if (currentProblem) {
                        if (currentTimer.running) pauseTimer();
                        else startTimer();
                    }
                    break;
                case 'v':
                    e.preventDefault();
                    // Focus on first video button in expanded card
                    const expandedCard = document.querySelector('.pattern-card.expanded');
                    if (expandedCard) {
                        const firstVideoBtn = expandedCard.querySelector('.problem-link[onclick*="openVideoModal"]');
                        if (firstVideoBtn) firstVideoBtn.click();
                    }
                    break;
                case '?':
                    e.preventDefault();
                    showShortcuts();
                    break;
            }
        });
        
        // Remove sample video watches - video watched feature removed
        
        // Initialize responsive behavior
        function initResponsive() {
            // Theme toggle initialization already handled in dark mode section
            // No additional setup needed
        }
        
        // Call responsive init
        initResponsive();
        
        // Debug function to test video ID extraction
        function testVideoExtraction() {
            const testUrls = [
                'https://youtu.be/UXW6rj9BgIQ',
                'https://www.youtube.com/watch?v=UXW6rj9BgIQ',
                'https://youtube.com/embed/UXW6rj9BgIQ',
                'https://www.youtube.com/v/UXW6rj9BgIQ'
            ];
            
            testUrls.forEach(url => {
                const videoId = extractYouTubeVideoId(url);
                console.log(`URL: ${url} -> Video ID: ${videoId}`);
            });
        }
        
        // Uncomment to test video extraction in console
        // testVideoExtraction();
