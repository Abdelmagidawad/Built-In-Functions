#include<iostream>
#include<string>
#include<cmath>
#include<iomanip>
#include<algorithm>
#include<stack>
 
using namespace std;

// Implemented Function Will Repeat The String
// s : The string that will be repeated
// num :The number of repeating

string stringRepeat(string s ,int num){
    string result;
    while(num--){
        result+=s+" ";
    }
    return result;
}

int main() {

  cout<<stringRepeat("Migo",5)<<endl;

    return 0;
}