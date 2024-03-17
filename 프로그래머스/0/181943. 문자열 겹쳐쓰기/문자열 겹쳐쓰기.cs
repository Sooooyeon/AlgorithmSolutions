using System;

public class Solution {
    public string solution(string my_string, string overwrite_string, int s) {
        
        string answer = my_string.Substring(0,s) + overwrite_string;
        int sub = my_string.Length - answer.Length;
        
        if(sub > 0){
            answer = answer + my_string.Substring(s + overwrite_string.Length);
        }
        
        return answer;
    }
}