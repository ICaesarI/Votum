#include "bits/stdc++.h"
using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int> arr;
    
    int max = 0;
    int number = 0;
    for(int z = 0; z < n; z++){
        cin>>number;
        arr.push_back(number);
    }
    
    int maxNumber = *max_element(arr.begin(), arr.end());
   
   int differece = 0;
   for(int j = 0; j < arr.size(); j++){
        differece += maxNumber - arr[j];
   }

   cout<<differece;
   


    return 0;
}