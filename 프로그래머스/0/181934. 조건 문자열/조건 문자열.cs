using System;

public class Solution {
    public int solution(string ineq, string eq, int n, int m) {
        string sign = "";
        if(eq.Equals("!")){
            sign = ineq;
        } else {
            sign = ineq + eq;
        }
        
        if(sign == ">=") return n >= m ? 1 : 0;
        if(sign == "<=") return n <= m ? 1 : 0;
        if(sign == ">") return n > m ? 1 : 0;
        if(sign == "<") return n < m ? 1 : 0;
        
        return 0;
    }
}