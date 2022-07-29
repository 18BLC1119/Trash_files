// See https://aka.ms/new-console-template for more informations
/*string x = "Hi, my name is Ashish Kumar. I am an Engineer from the Electronics and Computer Stream";
string y = x.Substring(0, 10);
Console.WriteLine(y.Length);
*/
string s = "Heyamashsihkumar.Iaman Engineer.I ";
string[] sArray = s.Split();
string ash = "";
for (int i = 0; i < sArray.Length; i++)
{
    ash += sArray[i];
    Console.WriteLine(sArray[i]);
}
Console.WriteLine(ash);