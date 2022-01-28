--!strict

--[[
	Constructs special keys for property tables which connects cleanup
    tasks to the destruction of an instance.
]]

local Pacakge = script.Parent.Parent
local PubTypes = require(Pacakge.PubTypes)

local Cleanup = {}
Cleanup.type = "SpecialKey"
Cleanup.kind = "Cleanup"
Cleanup.stage = "observer"

function Cleanup:apply(task: PubTypes.Task, _, cleanupTasks: {PubTypes.Task}): PubTypes.SpecialKey
    if task ~= nil then
        table.insert(cleanupTasks, task)
    end
end

return Cleanup