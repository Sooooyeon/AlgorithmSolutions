using System;

public class Solution {
    public int[] solution(int[] arr, int[,] queries) {
        int[] answer = (int[])arr.Clone();
        for(int i = 0; i < queries.GetLength(0); i++) { 
            int temp = answer[queries[i, 0]];
            answer[queries[i, 0]] = answer[queries[i, 1]];
            answer[queries[i, 1]] = temp;
        }
        return answer;
    }
}