local RunService = game:GetService("RunService")

local Package = game:GetService("ReplicatedStorage").Fusion
local New = require(Package.Instances.New)
local Cleanup = require(Package.Instances.Cleanup)

return function()
    local function waitForDefer()
        RunService.RenderStepped:Wait()
        RunService.RenderStepped:Wait()
    end

    it("should cleanup direct inputs when destroyed", function()
        waitForDefer()

        local done = false
        local function callback() done = true end

        local testObject = New "Folder" {
            Name = "TestParent",

            [Cleanup] = callback
        }

        testObject:Destroy()

        local start = os.clock()
        local timeout = 3

        repeat
            RunService.RenderStepped:Wait()
            if os.clock() - start > timeout then
                error("Failed to cleanup")
            end
        until done
    end)

    it("should cleanup arrays when destroyed", function()
        waitForDefer()

        local done = false
        local function callback() done = true end

        local testObject = New "Folder" {
            Name = "TestParent",

            [Cleanup] = {{callback}}
        }

        testObject:Destroy()

        local start = os.clock()
        local timeout = 3

        repeat
            RunService.RenderStepped:Wait()
            if os.clock() - start > timeout then
                error("Failed to cleanup")
            end
        until done
    end)

    it("should cleanup edited arrays when destroyed", function()
        waitForDefer()

        local done1, done2 = false, false
        local function callback1() done1 = true end
        local function callback2() done2 = true end

        local callbackArray = {callback1}

        local testObject = New "Folder" {
            Name = "TestParent",

            [Cleanup] = {callbackArray}
        }

        callbackArray[2] = callback2

        testObject:Destroy()

        local start = os.clock()
        local timeout = 3

        repeat
            RunService.RenderStepped:Wait()
            if os.clock() - start > timeout then
                error("Failed to cleanup")
            end
        until done1 and done2
    end)
end

