document.write("Matriz creada: ");
//x = prompt("Cuantas Filas desea asignar: ");
//y = prompt("Cuantas columnas desea asignar: ");
var num1 = 3;
var num2 = 3;
alert("Solucionaré la inversa de tú matriz 3*3");
document.write("Matriz creada: ");
var user_matrix = fillMatrix(num1, num2);
var dete_matrix = determinant(user_matrix);
if (dete_matrix != 0) {
    var atta_matrix = attachedMatrix (user_matrix);
    var tran_matrix = transposedMatrix (atta_matrix);    
    inverseMatrix (tran_matrix, dete_matrix);    
}else{
    document.write("<br>La matriz debe ser REGULAR (su determinante es distinto de 0), vuelva a interlo.");    
}
//Solucion de matriz inversa
function inverseMatrix(tran_matrix, dete_matrix)
{   
    var precise_value;
    var n = tran_matrix.length;
    //Nueva matriz para sacar la inversa
    var inve_matrix = new Array(n);

    for (var i = 0; i < n; i++) 
    {
        inve_matrix[i] = new Array(n)
      for (var j = 0; j < n; j++) 
      {
        //Asinamos los datos de la matriz inversa, segun formula
        precise_value = tran_matrix[i][j] / dete_matrix;
        inve_matrix[i][j] = precise_value.toPrecision(5);
        precise_value = 0;
      }

    }
    //Imprimimos la matriz Inversa y devolvemos resultado
    document.write(`<br><b>La matriz INVERSA es = </b>`);
    printMatrix(inve_matrix);
    return inve_matrix;
}

//Transpuesta de la matriz
function transposedMatrix(array)
{   
    var n = array.length;
    //Nueva matriz para sacar la transpuesta
    var res = new Array(n);

    //Le damos vuelta a la matriz filas por columnas
    for (var i = 0; i < n; i++) 
    {
        res[i] = new Array(n)
        for (var j = 0; j < n; j++) 
        {            
            res[i][j] = array[j][i];
        }
    }
    //Imprimimos la matriz tranpuesta y devolvemos resultado
    document.write(`<br>La matriz Transpuesta es = `);
    printMatrix(res);
    return res;
}

//Adjunta de la matriz
function attachedMatrix(array)
{   
    // Operacion para sacar la adjunta de una matriz 3x3
    var atta = [ [ [ (array[1][1] * array[2][2]) - (array[2][1] * array[1][2])],
               [ ((array[1][0] * array[2][2]) - (array[2][0] * array[1][2])) * (-1)],
               [ (array[1][0] * array[2][1]) - (array[2][0] * array[1][1]) ] ],

             [ [ ((array[0][1] * array[2][2]) - (array[2][1] * array[0][2])) * (-1)],
               [ (array[0][0] * array[2][2]) - (array[2][0] * array[0][2]) ],
               [ ((array[0][0] * array[2][1]) - (array[2][0] * array[0][1])) * (-1)] ],

             [ [ ((array[0][1] * array[1][2]) - (array[1][1] * array[0][2])) ],
               [ ((array[0][0] * array[1][2]) - (array[1][0] * array[0][2])) * (-1)],
               [ (array[0][0] * array[1][1]) - (array[1][0] * array[0][1])    ] ] ];
    
    //Imprimimos la matriz adjunta y devolvemos resultado    
    document.write(`<br>La matriz adjunta es = `);
    printMatrix(atta);
    return atta; 
}

function determinant (array)
{    
    // Operacion para sacar la terminante de una matriz 3x3
    det = (array[0][0] * array[1][1] * array[2][2]) + (array[1][0] * array[0][2] * array[2][1]) + 
          (array[0][1] * array[2][0] * array[1][2]) - (array[0][2] * array[1][1] * array[2][0]) - 
          (array[0][0] * array[2][1] * array[1][2]) - (array[1][0] * array[0][1] * array[2][2]);
    //Imprimimos resultado de la determinante
    document.write(`<br>El determinante de la matriz es = ${det} <br>`);
    return det;
}
function fillMatrix(rows, columns) 
{     
    var data;   
    //Creamos la matriz a solucionar
    var array = Array.from(Array(rows), () => new Array(columns));
    //El usuario ira llenando cada una de las posiciones de la matriz 3x3 
    for (let i = 0; i <= rows-1; i++) {
        for (let j = 0; j <= columns-1; j++) {
            //Solicitamos al usuario los valores de la matriz
            data = prompt("Valor en la posición ["+ i + "] [" + j + "]: ");
            array[i][j] = data; 
        }  
    }      
    //Imprimimos la matriz dinamica 
    printMatrix(array); 
    return array;
    
}

function printMatrix(array) 
{        
    //Imprimimos la matriz que se pase
    document.write("<br>");
    for (let i = 0; i <= array.length-1; i++) {

        for (let j = 0; j <= array[0].length-1; j++) {
            document.write(array[i][j] + "  |  ");
        }   
        document.write("<br>");
    }       
}
