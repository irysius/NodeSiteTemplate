using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;

namespace NodeSite
{
    class Program
    {
        static int portNumber = 1337;
        static void Main(string[] args)
        {
            // It is highly suggested that you start without debugging to reduce startup speed.
            Console.WriteLine("Starting up node.js app...");
            var siteroot = Path.GetFullPath(Environment.CurrentDirectory + @"\..\siteroot");
            ProcessStartInfo node = new ProcessStartInfo();
            node.FileName = "cmd.exe";
            node.WorkingDirectory = siteroot;
            node.Arguments = "/c npm start";
            Process.Start(node);

            Console.WriteLine("Waiting some time to start browser...");
            Thread.Sleep(2000);
            Console.WriteLine("Starting browser...");
            Process.Start("http://localhost:" + portNumber);
            Console.WriteLine("Node app started and browser opened.");
        }
    }
}