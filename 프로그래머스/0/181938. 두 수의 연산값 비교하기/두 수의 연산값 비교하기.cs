using System;

public class Solution {
    public int solution(int a, int b) {
        
        int answer = Int32.Parse(""+a+b) > 2*a*b ? 
        Int32.Parse(""+a+b) : 2*a*b;
        return answer;
    }
}