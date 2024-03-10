using System;

public class Example
{
    public static void Main()
    {
        String s;
        Console.Clear();
        s = Console.ReadLine();
        
        String result = "";
        
        foreach(char c in s){
            if(char.IsLower(c)){
                result = result + char.ToUpper(c);
            } else if(char.IsUpper(c)){
                result = result + char.ToLower(c);
            }
        }
        Console.Write(result);

    }
}