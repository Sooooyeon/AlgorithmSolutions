using System;

public class Solution {
    public int solution(int a, int b) {
        
        int answer = Int32.Parse(""+a+b) > Int32.Parse(""+b+a) ? Int32.Parse(""+a+b) : Int32.Parse(""+b+a);
        return answer;
    }
}