--[[
	The entry point for the Fusion library.
]]

local Children = require(script.Instances.Children)
local New = require(script.Instances.New)
local Types = require(script.Types)
local restrictRead = require(script.Utility.restrictRead)

export type State = Types.State
export type StateOrValue = Types.StateOrValue
export type Symbol = Types.Symbol

return restrictRead("Fusion", {
	New = New,
	Children = Children,
	OnEvent = require(script.Instances.OnEvent),
	OnChange = require(script.Instances.OnChange),

	State = require(script.State.State),
	Computed = require(script.State.Computed),
	ComputedPairs = require(script.State.ComputedPairs),
	Compat = require(script.State.Compat),

	Tween = require(script.Animation.Tween),
	Spring = require(script.Animation.Spring),

	createElement = function(name, instanceProps, children)
		local properties = {
			[Children] = children,
		}
		if instanceProps then
			for i, v in pairs(instanceProps) do
				properties[i] = v
			end
		end
		return New(name)(properties)
	end,
	createFragment = function(items)
		return items
	end,
})
