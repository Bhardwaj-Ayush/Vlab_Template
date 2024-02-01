import './Simulation.css';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code() {
  const [currentLanguage, setCurrentLanguage] = useState('python');
  const [copied, setCopied] = useState(false);

  const codeString = {
    python: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C'],
    'G': ['C']
}

print("DFS traversal starting from node 'A':")
dfs(graph, 'A')
`,
      Java: `import java.util.*;

      public class DepthFirstSearch {
          private Map<Integer, List<Integer>> graph;
      
          public DepthFirstSearch(Map<Integer, List<Integer>> graph) {
              this.graph = graph;
          }
      
          public void dfs(int start) {
              Set<Integer> visited = new HashSet<>();
              dfsUtil(start, visited);
          }
      
          private void dfsUtil(int node, Set<Integer> visited) {
              visited.add(node);
              System.out.print(node + " ");
      
              List<Integer> neighbors = graph.getOrDefault(node, new ArrayList<>());
              for (int neighbor : neighbors) {
                  if (!visited.contains(neighbor)) {
                      dfsUtil(neighbor, visited);
                  }
              }
          }
      
          public static void main(String[] args) {
              Map<Integer, List<Integer>> graph = new HashMap<>();
              graph.put(0, Arrays.asList(1, 2));
              graph.put(1, Arrays.asList(0, 3, 4));
              graph.put(2, Arrays.asList(0, 5));
              graph.put(3, Arrays.asList(1));
              graph.put(4, Arrays.asList(1));
              graph.put(5, Arrays.asList(2));
      
              DepthFirstSearch dfs = new DepthFirstSearch(graph);
              System.out.print("DFS traversal starting from node 0: ");
              dfs.dfs(0);
          }
      }
      `,
      'C++' : `#include <iostream>
      #include <vector>
      #include <unordered_map>
      #include <unordered_set>
      
      using namespace std;
      
      class Graph {
      private:
          unordered_map<int, vector<int>> adjacencyList;
      
      public:
          void addEdge(int u, int v) {
              adjacencyList[u].push_back(v);
          }
      
          void dfs(int start) {
              unordered_set<int> visited;
              dfsUtil(start, visited);
          }
      
      private:
          void dfsUtil(int node, unordered_set<int>& visited) {
              visited.insert(node);
              cout << node << " ";
      
              for (int neighbor : adjacencyList[node]) {
                  if (visited.find(neighbor) == visited.end()) {
                      dfsUtil(neighbor, visited);
                  }
              }
          }
      };
      
      int main() {
          Graph graph;
          graph.addEdge(0, 1);
          graph.addEdge(0, 2);
          graph.addEdge(1, 3);
          graph.addEdge(1, 4);
          graph.addEdge(2, 5);
      
          cout << "DFS traversal starting from node 0: ";
          graph.dfs(0);
      
          return 0;
      }
      ` ,
  };

  const handleCopy = () => {
    const code = codeString[currentLanguage];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };


  return (
    <>
      <div className="container">
        <div className="box" id="code">
          <div className="title">
            <h2 className="font-Robo text-3xl text-center">Code</h2>
          </div>
          <div className="desc1">
            <div className="code_header">
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'python' ? 'active' : ''}`}
                onClick={() => setCurrentLanguage('python')}
              >
                Python
              </button>
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'java' ? 'active' : ''}`}
                onClick={() => setCurrentLanguage('Java')}
              >
                Java
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1"
                // style={{ backgroundColor: 'Black', color: 'white', marginBottom: '-20px' }}
                onClick={() => setCurrentLanguage('C++')}
              >
                C++
              </button>
              <button className=" bg-gray-300 hover:bg-gray-800 hover:text-white text-black font-bold py-1 px-2 rounded-sm float-right mt-2" onClick={handleCopy} >
              {copied ? 'Copied!' : 'Copy Code'}
              </button>

            </div>
            <div className="max-w-2x1 min-w-[25rem]  rounded-md overflow-hidden">
              
              <div className="grid place-items-center border-2 border-black p-4 bg-slate-950">
                <p className="text-xl text-white">
                  {currentLanguage}
                </p>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '20px', paddingTop: '6px' }}>
                  {codeString[currentLanguage]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
