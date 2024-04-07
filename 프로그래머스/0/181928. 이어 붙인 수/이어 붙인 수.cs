using System;

public class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        string odd = "";
        string even = "";
        for(int i = 0; i<num_list.Length; i++){
            if(num_list[i] % 2 == 0){ even += num_list[i]; }
            else{ odd += num_list[i]; }
        }
        answer = Int32.Parse(odd) + Int32.Parse(even);
        return answer;
    }
}