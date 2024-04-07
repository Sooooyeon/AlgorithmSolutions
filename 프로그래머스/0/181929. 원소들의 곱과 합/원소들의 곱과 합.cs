using System;

public class Solution {
    public int solution(int[] num_list) {
        int gop = 1;
        int hap = 0;
        for( int i = 0; i< num_list.Length; i++){
            gop = gop * num_list[i];
            hap = hap + num_list[i];
        }
        return hap*hap > gop ? 1 :0;
    }
}