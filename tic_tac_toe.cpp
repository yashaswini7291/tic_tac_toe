#include <bits/stdc++.h>
using namespace std;



class TicTacToe{


	vector<int> rowOcuupancy;
	vector<int> columnOccupancy;
	int lrDiagnoalOccupancy;
	int rlDiagnoalOccupancy;
	int gridSize;

public:

	TicTacToe(int n)//Constructor
	{
		gridSize = n;
		rowOcuupancy.resize(n,0);
		columnOccupancy.resize(n,0);
		lrDiagnoalOccupancy = 0;
		rlDiagnoalOccupancy = 0;
	}

	int move(int row,int col,int p)
	{
		if(p == 1)
		{
			rowOcuupancy[row]++;
			columnOccupancy[col]++;
			if(row == col)
			{
				lrDiagnoalOccupancy++;
			}
			if(row + col == gridSize-1)//good idea
			{
				rlDiagnoalOccupancy++;
			}
			if(rowOcuupancy[row] == gridSize || columnOccupancy[col] == gridSize || lrDiagnoalOccupancy == gridSize || rlDiagnoalOccupancy == gridSize)
			{
				return 1;
			}
			else
				return 0;
		}

		if(p == 2)
		{
			rowOcuupancy[row]--;
			columnOccupancy[col]--;
			if(row == col)
			{
				lrDiagnoalOccupancy--;
			}
			if(row + col == gridSize-1)//good idea
			{
				rlDiagnoalOccupancy--;
			}
			if(rowOcuupancy[row] == -gridSize || columnOccupancy[col] == -gridSize || lrDiagnoalOccupancy == -gridSize || rlDiagnoalOccupancy == -gridSize)
			{
				return 2;
			}
			else 
				return 0;
		}
		return 0;
	}
	

};

int main()
{

	TicTacToe toe(3);
	cout << toe.move(0, 0, 1) << '\n';
	cout << toe.move(0, 2, 2) << '\n';
	cout << toe.move(2, 2, 1) << '\n';
	cout << toe.move(1, 1, 2) << '\n';
	cout << toe.move(2, 0, 1) << '\n';
	cout << toe.move(1, 0, 2) << '\n';
	cout << toe.move(2, 1, 1) << '\n';


}
