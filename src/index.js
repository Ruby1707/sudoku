module.exports = function solveSudoku(matrix) {
    if(Solve(matrix)===true){
      return matrix;
    }
  }
  function SolveColumn(matrix,i,j,Number){
    for(var k=0;k<9;k++){
      if(j!=k && matrix[i][k]==Number){
        return false;
      }
    }
    return true;
  }
  function SolveRow(matrix,i,j,Number){
    for(var k=0;k<9;k++){
      if(i!=k && matrix[k][j]==Number){
        return false;
      }
    }
    return true;
  }
  function NoNumbersLikeIt(matrix, i,j,Number){
    let Column=(i-i%3);
    let Row=(j-j%3);
    for(var aa=0;aa<3;aa++){
      for(var bb=0;bb<3;bb++){
        if(aa != i && bb != j && matrix[aa+Column][bb+Row]==Number){
          return false;
        }
      }
    }
    return true;
  }

  function Solve(matrix){
    let Recursion;
    for(var a=0;a<9;a++){
      for(var b=0;b<9;b++){
        if(matrix[a][b]!=0){
          continue
        }
          for(var PosipleNumber=1; PosipleNumber<=9; PosipleNumber++){

            if(NoNumbersLikeIt(matrix,a,b,PosipleNumber)===true && SolveRow(matrix,a,b,PosipleNumber)===true && SolveColumn(matrix,a,b,PosipleNumber)===true) {


              matrix[a][b]=PosipleNumber;
              Recursion=Solve(matrix);
              if(Recursion==true){
                return true;
              }
              matrix[a][b]=0;
            }
          }
          return false;

      }
    }
    return true;
  }
