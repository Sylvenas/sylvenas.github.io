---
title:  "03-types and type classes"
author: [Sylvenas]
categories: 'Haskell'
img: './img/2013-06-12.jpeg'
---
# types-and-type-classes

## 相信类型

[^img/cow.png]

在前面我们谈到Haskell是静态类型的，在编译时每个表达式的类型都已明确，这就提高了代码的安全性。若代码中让布尔值与数字相除，就不会通过编译。这样的好处就是与其让程序在运行时崩溃，不如在编译时捕获可能的错误。Haskell中万物皆有类型，因此在执行编译之时编译器可以大有所为。

与Java和Pascal不同，haskell支持类型推导。写下一个数字，你就没必要另告诉haskell说“它是个数字”，它自己能推导出来。这样我们就不必在每个函数或表达式上都标明其类型了。在前面我们只简单涉及一下haskell的类型方面的知识，但是理解这一类型系统对于haskell的学习是至关重要的。

类型是每个表达式都有的某种标签，它标明了这一表达式所属的范畴。例如，表达式True是boolean型，"hello"是个字符串，等等。

可以使用ghci来检测表达式的类型。使用:t命令后跟任何可用的表达式，即可得到该表达式的类型，先试一下：
``` hs
{{
ghci> :t 'a'  
'a' :: Char  
ghci> :t True  
True :: Bool  
ghci> :t "HELLO!"  
"HELLO!" :: [Char]  
ghci> :t (True, 'a')  
(True, 'a') :: (Bool, Char)  
ghci> :t 4 == 5  
4 == 5 :: Bool
}}
```
[$img/bomb.png]

可以看出，``:t``命令处理一个表达式的输出结果为表达式后跟``::``及其类型，``::``读作“它的类型为”。凡是明确的类型，其首字母必为大写。``'a'``,如它的样子，是``Char``类型，易知是个字符（character）。``True``是``Bool``类型，也靠谱。不过这又是啥，检测``"HELLO!"``得一个 ``[Char]``？这方括号表示一个List，所以我们可以将其读作“一组字符的List”。而与List不同，每个Tuple都是独立的类型，于是``(True,'a')``的类型是``(Bool,Char)``，而``('a','b','c')``的类型为``(Char,Char,Char)``。``4==5``一定返回 False，所以它的类型为Bool。

同样，函数也有类型。编写函数时，给它一个明确的类型声明是个好习惯，比较短的函数就不用多此一举了。还记得前面那个过滤大写字母的List Comprehension吗？给它加上类型声明便是这个样子：
``` hs
{{
removeNonUppercase :: [Char] -> [Char]  
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]   
}}
```
 ``removeNonUppercase``的类型为``[Char]->[Char]``，从它的参数和返回值的类型上可以看出，它将一个字符串映射为另一个字符串。``[Char]``与``String``是等价的，但使用String会更清晰：``removeNonUppercase :: String -> String``。编译器会自动检测出它的类型，我们还是标明了它的类型声明。要是多个参数的函数该怎样？如下便是一个将三个整数相加的简单函数。
``` hs
{{
addThree :: Int -> Int -> Int -> Int  
addThree x y z = x + y + z  
}}
```
参数之间由->分隔，而与返回值之间并无特殊差异。返回值是最后一项，参数就是前三项。稍后，我们将讲解为何只用->而不是``Int,Int,Int->Int``之类“更好看”的方式来分隔参数。

如果你打算给你编写的函数加上个类型声明却拿不准它的类型是啥，只要先不写类型声明，把函数体写出来，再使用:t命令测一下即可。函数也是表达式，所以:t对函数也是同样可用的。

如下是几个常见的类型：

**Int**表示整数。7可以是Int，但7.2不可以。Int是有界的，也就是说它由上限和下限。对32位的机器而言，上限一般是214748364，下限是-214748364。

**Integer**表示...厄...也是整数，但它是无界的。这就意味着可以用它存放非常非常大的数，我是说非常大。它的效率不如Int高。
``` hs
{{
factorial :: Integer -> Integer  
factorial n = product [1..n]  
}}

{{
ghci> factorial 50  
30414093201713378043612608166064768844377641568960512000000000000  
}}
``` 
**Float**表示单精度的浮点数。
``` js
{{
circumference :: Float -> Float  
circumference r = 2 * pi * r  
}}

{{
ghci> circumference 4.0  
25.132742  
}}
```
**Double**表示双精度的浮点数。
``` hs
{{
circumference' :: Double -> Double  
circumference' r = 2 * pi * r  
}}

{{
ghci> circumference' 4.0  
25.132741228718345  
}}
```

**Bool**表示布尔值，它只有两种值：True和False。

**Char**表示一个字符。一个字符由单引号括起，一组字符的List即为字符串。

Tuple的类型取决于它的长度及其中项的类型。注意，空Tuple同样也是个类型，它只有一种值：``()``。


## 类型变量

你觉得head函数的类型是啥？它可以取任意类型的List的首项，是怎么做到的呢？我们查一下！
``` hs
{{
ghci> :t head  
head :: [a] -> a  
}}
```
[^img/box.png]

嗯! a是啥？类型吗？想想我们在前面说过，凡是类型其首字母必大写，所以它不会是个类型。它是个类型变量，意味着a可以是任意的类型。这一点与其他语言中的泛型(generic)很相似，但在haskell中要更为强大。它可以让我们轻而易举地写出类型无关的函数。使用到类型变量的函数被称作“多态函数 ”，head函数的类型声明里标明了它可以取任意类型的List并返回其中的第一个元素。

在命名上，类型变量使用多个字符是合法的，不过约定俗成，通常都是使用单个字符，如a,b,c,d...

还记得fst？我们查一下它的类型：
``` hs
{{
ghci> :t fst  
fst :: (a, b) -> a  
}}
```
可以看到fst取一个包含两个类型的Tuple作参数，并以第一个项的类型作为返回值。这便是fst可以处理一个含有两种类型项的pair的原因。注意，a和b是不同的类型变量，但它们不一定非得是不同的类型，它只是标明了首项的类型与返回值的类型相同。

## 类型类101

[$img/classes.png]

类型定义行为的接口，如果一个类型属于某类型类，那它必实现了该类型类所描述的行为。很多从OOP走过来的人们往往会把类型类当成面向对象语言中的类而感到疑惑，厄，它们不是一回事。易于理解起见，你可以把它看做是java中接口（interface）的类似物。

`==`函数的类型声明是怎样的？
``` hs
{{
ghci> :t (==)  
(==) :: (Eq a) => a -> a -> Bool
}}
```

> 判断相等的==运算符是函数，`+-*/`之类的运算符也是同样。在默认条件下，它们多为中缀函数。若要检查它的类型，就必须得用括号括起使之作为另一个函数，或者说以前缀函数的形式调用它。

有意思。在这里我们见到个新东西：=>符号。它左边的部分叫做类型约束。我们可以这样阅读这段类型声明：“相等函数取两个相同类型的值作为参数并返回一个布尔值，而这两个参数的类型同在Eq类之中（即类型约束）”

**Eq**这一类型类提供了判断相等性的接口，凡是可比较相等性的类型必属于Eq类。
``` hs
{{
ghci> 5 == 5   
True   
ghci> 5 /= 5   
False   
ghci> 'a' == 'a'   
True   
ghci> "Ho Ho" == "Ho Ho"   
True   
ghci> 3.432 == 3.432   
True 
}}
```
elem函数的类型为: ``(Eq a)=>a->[a]->Bool``。这是它在检测值是否存在于一个list时使用到了==的缘故。

几个基本的类型类：

**Eq**包含可判断相等性的类型。提供实现的函数是==和/=。所以，只要一个函数有Eq类的类型限制，那么它就必定在定义中用到了==和/=。刚才说了，除函数以外的所有类型都属于Eq，所以它们都可以判断相等性。

**Ord**包含可比较大小的类型。除了函数以外，我们目前所谈到的所有类型都属于Ord类。Ord包中包含了`<,>,<=,>=`之类用于比较大小的函数。compare函数取两个Ord类中的相同类型的值作参数，返回比较的结果。这个结果是如下三种类型之一：GT,LT,EQ。
``` hs
{{
ghci> :t (>)  
(>) :: (Ord a) => a -> a -> Bool  
}}
```
类型若要成为Ord的成员，必先加入Eq家族。
``` hs
{{
ghci> "Abrakadabra" < "Zebra"  
True  
ghci> "Abrakadabra" `compare` "Zebra"  
LT  
ghci> 5 >= 2  
True  
ghci> 5 `compare` 3  
GT  
}}
```
**Show**的成员为可用字符串表示的类型。目前为止，除函数以外的所有类型都是Show的成员。操作Show类型类，最常用的函数表示show。它可以取任一Show的成员类型并将其转为字符串。
``` hs
{{
ghci> show 3  
"3"  
ghci> show 5.334  
"5.334"  
ghci> show True  
"True"  
}}
```
**Read**是与Show相反的类型类。read函数可以将一个字符串转为Read的某成员类型。
``` hs
{{
ghci> read "True" || False  
True  
ghci> read "8.2" + 3.8  
12.0  
ghci> read "5" - 2  
3  
ghci> read "[1,2,3,4]" ++ [3]  
[1,2,3,4,3]  
}}
```
一切良好，如上的所有类型都属于这一类型类。尝试read "4"又会怎样？
``` hs
{{
ghci> read "4"  
< interactive >:1:0:  
    Ambiguous type variable `a' in the constraint:  
      `Read a' arising from a use of `read' at <interactive>:1:0-7  
    Probable fix: add a type signature that fixes these type variable(s)  
}}
```
ghci跟我们说它搞不清楚我们想要的是什么样的返回值。注意调用read后跟的那部分，ghci通过它来辨认其类型。若要一个boolean值，他就知道必须得返回一个Bool类型的值。但在这里它只知道我们要的类型属于Read类型类，而不能明确到底是哪个。看一下read函数的类型声明吧：
``` hs
{{
ghci> :t read  
read :: (Read a) => String -> a  
}}
```
看？它的返回值属于Read类型类，但我们若用不到这个值，它就永远都不会得知该表达式的类型。所以我们需要在一个表达式后跟``::``的*类型注释*，以明确其类型。如下：

{{
ghci> read "5" :: Int  
5  
ghci> read "5" :: Float  
5.0  
ghci> (read "5" :: Float) * 4  
20.0  
ghci> read "[1,2,3,4]" :: [Int]  
[1,2,3,4]  
ghci> read "(3, 'a')" :: (Int, Char)  
(3, 'a')  
}}

编译器可以辨认出大部分表达式的类型，但遇到``read "5"``的时候它就搞不清楚究竟该是Int还是Float了。只有经过运算，haskell才会明确其类型；同时由于haskell是静态的，它还必须得在 编译前搞清楚所有值的类型。所以我们就最好提前给它打声招呼：“嘿，这个表达式应该是这个类型，省的你认不出来！”

**Enum**的成员都是连续的类型--也就是可枚举。Enum类存在的主要好处就在于我们可以在Range中用到它的成员类型：每个值都有后继子(successer)和前置子(predecesor)，分别可以通过succ函数和pred函数得到。该类型类包含的类型有：``()``, ``Bool``, ``Char``, ``Ordering``, ``Int``, ``Integer``, ``Float`` 和 ``Double``。
``` hs
{{
ghci> ['a'..'e']  
"abcde"  
ghci> [LT .. GT]  
[LT,EQ,GT]  
ghci> [3 .. 5]  
[3,4,5]  
ghci> succ 'B'  
'C'  
}}
```
**Bounded**的成员都有一个上限和下限。
``` hs
{{
ghci> minBound :: Int  
-2147483648  
ghci> maxBound :: Char  
'\1114111'  
ghci> maxBound :: Bool  
True  
ghci> minBound :: Bool  
False  
}}
```

``minBound``和``maxBound``函数很有趣，它们的类型都是``(Bounded a) => a``。可以说，它们都是多态常量。

如果其中的项都属于``Bounded``类型类，那么该Tuple也属于``Bounded``
``` hs
{{
ghci> maxBound :: (Bool, Int, Char)  
(True,2147483647,'\1114111')  
}}
```
**Num**是表示数字的类型类，它的成员类型都具有数字的特征。检查一个数字的类型：
``` hs
{{
ghci> :t 20  
20 :: (Num t) => t  
}}
```
看样子所有的数字都是多态常量，它可以作为所有``Num``类型类中的成员类型。以上便是``Num``类型类中包含的所有类型，检测`*`运算符的类型，可以发现它可以处理一切的数字：
``` hs
{{
ghci> :t (*)  
(*) :: (Num a) => a -> a -> a  
}}
```
它只取两个相同类型的参数。所以``(5 :: Int) * (6 :: Integer)``会引发一个类型错误，而``5 * (6 :: Integer)``就不会有问题。

类型只有亲近``Show``和``Eq``，才可以加入``Num``。

**Integral**同样是表示数字的类型类。Num包含所有的数字：实数和整数。而Integral仅包含整数，其中的成员类型有Int和Integer。

**Floating**仅包含浮点类型：Float和Double。

有个函数在处理数字时会非常有用，它便是``fromIntegral``。其类型声明为：``fromIntegral :: (Num b, Integral a) => a -> b``。从中可以看出，它取一个整数做参数并返回一个更加通用的数字，这在同时处理整数和浮点时会尤为有用。举例来说，``length``函数的类型声明为：``length :: [a] -> Int``，而非更通用的形式，如``(Num b) => length :: [a] -> b``。这应该时历史原因吧，反正我觉得挺蠢。如果取了一个List长度的值再给它加3.2就会报错，因为这是将浮点数和整数相加。面对这种情况，我们就用``fromIntegral (length [1,2,3,4]) + 3.2``来解决。

注意到，``fromIntegral``的类型声明中用到了多个类型约束。如你所见，只要将多个类型约束放到括号里用逗号隔开即可。
