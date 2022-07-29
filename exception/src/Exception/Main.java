import java.util.*;
class Square{
    float sq(float len,float bred){
        return len*bred;
    }
}
class Rectangle extends Square{
    void rect(float len,float bred){
        System.out.println(super.sq(len,bred));
    }
}
public class Main {
    public static void main(String[] args){
       System.out.println("Hello world");
    }
}
