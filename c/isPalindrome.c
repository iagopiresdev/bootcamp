#include <stdbool.h>

bool isPalindrome(int x){
    //compare if the number is the same when reversed
    //if it is, return true
    //else return false
    int reversed = 0;
    int original = x;
    if(x < 0){
        return false;
    }
    while(x != 0){
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }
    if(reversed == original){
        return true;
    }
    return false;
}