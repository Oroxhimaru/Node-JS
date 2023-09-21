# Guideline
1. First go through global.js file
2. then people.js and modules.js
3. after those file.js
4. stream.js


what is win32 in os.platform()

In the context of the `os.platform()` function in Node.js, "win32" represents the platform identifier for the Windows operating system. When you call `os.platform()`, it returns a string that identifies the underlying operating system where your Node.js code is running.

So, if you receive "win32" as the result of `os.platform()`, it means your Node.js code is running on a Windows-based operating system. This information can be useful in your Node.js applications to make platform-specific decisions or configurations, as different operating systems may require different handling of certain tasks or resources.

win32" Platform Identifier: When you run os.platform() on a Windows-based system, it will typically return "win32" regardless of whether the Windows operating system is 32-bit or 64-bit. The "win32" identifier signifies that your code is running on a Windows platform