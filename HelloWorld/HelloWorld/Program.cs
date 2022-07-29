namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 5;
            int num2 = 3;
            int num3;
            num3 = -num1;     //multiplied by -1
            bool isSunny = true;
            //Console.WriteLine("num3 is " + num3);
            //Console.WriteLine("Negation of true is " + !isSunny);
            int num = 0;
            num++;
            Console.WriteLine(num); //++num num-- --num num1+num2 num1-num2 num1*num2 num1/num2 num1%num2
            bool isLower = num1 < num2;
            Console.WriteLine(isLower);
            bool isEqual;
            isEqual = num1 == num2;
            Console.WriteLine(isEqual);  //!=
            // true && false
            //conditional operators && ||
        }

    }
}