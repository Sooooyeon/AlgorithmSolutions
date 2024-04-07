using System;
using System.Collections.Generic;

public class Solution {
    public int[] solution(int[] num_list) {
        List<int> answerList = new List<int>(num_list);
        int last = num_list[num_list.Length - 1];
        int prev = num_list[num_list.Length - 2];
        if(last > prev){
            answerList.Add(last - prev);
        } else {
            answerList.Add(last * 2);
        }
        return answerList.ToArray();
    }
}