import './Simulation.css';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code() {
  const [currentLanguage, setCurrentLanguage] = useState('python');
  const [copied, setCopied] = useState(false);

  const codeString = {
    python: `from collections import deque
  def bfs(graph, start):
      visited = set()
      queue = deque([start])

      while queue:
          node = queue.popleft()
          print(node)

          if node not in visited:
              visited.add(node)
              for neighbor in graph[node]:
                  if neighbor not in visited:
                      queue.append(neighbor)

  graph = {
      'A': ['B', 'C'],
      'B': ['D', 'E'],
      'C': ['F'],
      'D': [],
      'E': ['F'],
      'F': []
  }

  bfs(graph, 'A')`,
      cpp: `#include <iostream>
      #include <queue>
      #include <unordered_set>
      #include <unordered_map>
      using namespace std;
      
      void bfs(unordered_map<char, vector<char>>& graph, char start) {
          unordered_set<char> visited;
          queue<char> q;
          q.push(start);
      
          while (!q.empty()) {
              char node = q.front();
              q.pop();
              cout << node << " ";
      
              if (visited.find(node) == visited.end()) {
                  visited.insert(node);
                  for (char neighbor : graph[node]) {
                      if (visited.find(neighbor) == visited.end()) {
                          q.push(neighbor);
                      }
                  }
              }
          }
      }
      
      int main() {
          unordered_map<char, vector<char>> graph = {
              {'A', {'B', 'C'}},
              {'B', {'D', 'E'}},
              {'C', {'F'}},
              {'D', {}},
              {'E', {'F'}},
              {'F', {}}
          };
      
          bfs(graph, 'A');
      
          return 0;
      }
      `,
      Java: `import java.util.*;

      public class BFS {
      
          public static void bfs(Map<Character, List<Character>> graph, char start) {
              Set<Character> visited = new HashSet<>();
              Queue<Character> queue = new LinkedList<>();
              queue.offer(start);
      
              while (!queue.isEmpty()) {
                  char node = queue.poll();
                  System.out.print(node + " ");
      
                  if (!visited.contains(node)) {
                      visited.add(node);
                      List<Character> neighbors = graph.get(node);
                      if (neighbors != null) {
                          for (char neighbor : neighbors) {
                              if (!visited.contains(neighbor)) {
                                  queue.offer(neighbor);
                              }
                          }
                      }
                  }
              }
          }
      
          public static void main(String[] args) {
              Map<Character, List<Character>> graph = new HashMap<>();
              graph.put('A', Arrays.asList('B', 'C'));
              graph.put('B', Arrays.asList('D', 'E'));
              graph.put('C', Arrays.asList('F'));
              graph.put('D', new ArrayList<>());
              graph.put('E', Arrays.asList('F'));
              graph.put('F', new ArrayList<>());
      
              bfs(graph, 'A');
          }
      }
    `,
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
                onClick={() => setCurrentLanguage('cpp')}
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
