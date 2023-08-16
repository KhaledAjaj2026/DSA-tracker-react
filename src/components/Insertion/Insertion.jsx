import './Insertion.css';

function Insertion() {
	return (
		<>
			<section id="insertion-section">
				<div className="input-fields">
					<div className="input-div">
						<label htmlFor="question">Question</label>
						<input
							id="question"
							name="question"
							type="text"
							placeholder="e.g. Reverse Array"
						></input>
					</div>
					<div className="input-div">
						<label htmlFor="source">Source</label>
						<input
							id="source"
							name="source"
							type="text"
							placeholder="e.g. LeetCode #23"
						></input>
					</div>
					<div className="input-div">
						<label htmlFor="categories">Categories</label>
						<select id="category-menu" name="categories">
							<option value="none-c" selected disabled>
								select categories
							</option>
							<option value="array">Array</option>
							<option value="backtracking">Backtracking</option>
							<option value="biconnected-component">
								Biconnected Component
							</option>
							<option value="binary-indexed-tree">Binary Indexed Tree</option>
							<option value="binary-search">Binary Search</option>
							<option value="binary-search-tree">Binary Search Tree</option>
							<option value="binary-tree">Binary Tree</option>
							<option value="bit-manipulation">Bit Manipulation</option>
							<option value="bitmask">Bitmask</option>
							<option value="brainteaser">Brainteaser</option>
							<option value="BFS">Breadth-First Search</option>
							<option value="bucket-sort">Bucket Sort</option>
							<option value="combinatorics">Combinatorics</option>
							<option value="concurrency">Concurrency</option>
							<option value="counting">Counting</option>
							<option value="counting-sort">Counting Sort</option>
							<option value="data-stream">Data Stream</option>
							<option value="database">Database</option>
							<option value="DFS">Depth-First Search</option>
							<option value="design">Design</option>
							<option value="divide-and-conquer">Divide and Conquer</option>
							<option value="doubly-linked-list">Doubly-Linked List</option>
							<option value="dynamic-programming">Dynamic Programming</option>
							<option value="enumeration">Enumeration</option>
							<option value="eulerian-circuit">Eulerian Circuit</option>
							<option value="game-theory">Game Theory</option>
							<option value="geometry">Geometry</option>
							<option value="graph">Graph</option>
							<option value="greedy">Greedy</option>
							<option value="hash-function">Hash Function</option>
							<option value="hash-table">Hash Table/Map</option>
							<option value="heap-pq">Heap (Priority Queue)</option>
							<option value="interactive">Interactive</option>
							<option value="iterator">Iterator</option>
							<option value="line-sweep">Line Sweep</option>
							<option value="linked-list">Linked List</option>
							<option value="math">Math</option>
							<option value="matrix">Matrix</option>
							<option value="memoization">Memoization</option>
							<option value="merge-sort">Merge Sort</option>
							<option value="minimum-spanning-tree">
								Minimum Spanning Tree
							</option>
							<option value="monotonic-queue">Monotonic Queue</option>
							<option value="monotonic-stack">Monotonic Stack</option>
							<option value="number-theory">Number Theory</option>
							<option value="ordered-set">Ordered Set</option>
							<option value="prefix-sum">Prefix Sum</option>
							<option value="probability-and-stats">
								Probability and Statistics
							</option>
							<option value="queue">Queue</option>
							<option value="quick-select">Quick-select</option>
							<option value="radix-sort">Radix Sort</option>
							<option value="recursion">Recursion</option>
							<option value="rejection-sampling">Rejection Sampling</option>
							<option value="resevoir-sampling">Reservoir Sampling</option>
							<option value="rolling-hash">Rolling Hash</option>
							<option value="segment-tree">Segment Tree</option>
							<option value="shell">Shell</option>
							<option value="shortest-path">Shortest Path</option>
							<option value="simulation">Simulation</option>
							<option value="sliding-window">Sliding Window</option>
							<option value="sorting">Sorting</option>
							<option value="stack">Stack</option>
							<option value="string">String</option>
							<option value="string-matching">String Matching</option>
							<option value="strongly-connected">
								Strongly Connected Component
							</option>
							<option value="suffix-array">Suffix Array</option>
							<option value="topological-sort">Topological Sort</option>
							<option value="tree">Tree</option>
							<option value="trie">Trie</option>
							<option value="two-pointers">Two Pointers</option>
							<option value="union-find">Union Find</option>
							<option value="inputvaluehere">AddNameHere</option>
						</select>
						<button id="add-category" className="submit">
							Add
						</button>
					</div>
					<div className="input-div">
						<label htmlFor="difficulty">Difficulty</label>
						<select name="difficulty" id="difficulty">
							<option value="none-d" selected disabled>
								Select difficulty
							</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>
					<div className="input-div">
						<label htmlFor="date">Date</label>
						<input
							id="date"
							name="date"
							type="date"
							placeholder="e.g. 1/2/2023"
						></input>
					</div>
					<div className="input-div">
						<label htmlFor="time">Time</label>
						<input
							id="time"
							name="time"
							type="number"
							placeholder="e.g. 60"
						></input>
					</div>
				</div>
				<div className="categories-selected">
					<p id="categories-selected_title">Selected Categories (max 5):</p>
					<div id="item_window">
						<p>Strongly Connected Component</p>
						<p>Strongly Connected Component</p>
						<p>Strongly Connected Component</p>
						<p>Strongly Connected Component</p>
						<p>Strongly Connected Component</p>
					</div>
				</div>
				<button id="enter-button" className="submit" onClick="addRow()">
					Enter
				</button>
			</section>
		</>
	);
}

export default Insertion;
