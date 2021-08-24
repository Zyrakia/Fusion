--[[
	The entry point for the Fusion library.
]]

local Children = require(script.Instances.Children)
local New = require(script.Instances.New)
local OnChange = require(script.Instances.OnChange)
local OnEvent = require(script.Instances.OnEvent)
local Types = require(script.Types)
local restrictRead = require(script.Utility.restrictRead)

export type State = Types.State
export type StateOrValue = Types.StateOrValue
export type Symbol = Types.Symbol

return restrictRead("Fusion", {
	Children = Children,
	OnChange = OnChange,
	OnEvent = OnEvent,
	New = New,

	Compat = require(script.State.Compat),
	Computed = require(script.State.Computed),
	ComputedPairs = require(script.State.ComputedPairs),
	State = require(script.State.State),

	Spring = require(script.Animation.Spring),
	Tween = require(script.Animation.Tween),

	createElement = function(name, props, onChanged, onEvent, children)
		local endProps = {
			[Children] = children,
		}
		if props then
			for i, v in pairs(props) do
				endProps[i] = v
			end
		end
		if onChanged then
			for i, v in pairs(onChanged) do
				endProps[OnChange(i)] = v
			end
		end
		if onEvent then
			for i, v in pairs(onEvent) do
				endProps[OnEvent(i)] = v
			end
		end
		return New(name)(endProps)
	end,
	createFragment = function(items)
		return items or {}
	end,
})
