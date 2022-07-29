// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
IDictionary<int, int> map = new Dictionary<int, int>();
map.Add(1, 2);
map.Add(2, 3);
map.Add(3, 4);
map.Add(4, 5);
map.Add(5, 6);
if (map.ContainsKey(1))
{
    map[1]++;
}
foreach (KeyValuePair<int, int> pair in map)
{
    Console.WriteLine("key is " + pair.Key + " " + "value is " + pair.Value);
}
IDictionary<int, int> map2 = new Dictionary<int, int>();
foreach (KeyValuePair<int, int> pair in map)
{
    map2.Add(pair.Key, 0);
}
Console.WriteLine("Showing values for map2");
foreach (KeyValuePair<int, int> pair in map2)
{
    Console.WriteLine("key is " + pair.Key + " " + "value is " + pair.Value);
}