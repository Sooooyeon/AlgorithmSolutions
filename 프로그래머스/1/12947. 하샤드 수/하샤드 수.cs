public class Solution {
    public bool solution(int x) {
        bool answer = true;
        int num = x;
        int sum = 0;
        while(num != 0){
            sum += num % 10;
            num = num / 10;
        }
        return x % sum == 0 ? true : false;
    }
}