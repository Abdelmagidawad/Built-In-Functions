#include<iostream>
#include<string>
#include<cmath>
#include<iomanip>
#include<algorithm>
#include<stack>

using namespace std;

#define ll long long 

// Implemented Function Will Calculate length of String
// s : The string

void sizeString(string s) {
    int count = 0;
    while (s[count] !='\0') count++;

    cout <<"The Size = "<< count << endl;
}


int main()
{
    string s;  cin >> s;
    sizeString(s);

    return 0;
}
