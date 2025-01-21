ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('reactive_dust_mixture_mixer')
        .itemInputs('12x extendedcrafting:luminessence', '7x gtceu:enriched_sunnarium_dust', '8x kubejs:primal_mana', '13x gtceu:cadmium_dust', '3x gtceu:nether_star_dust', '21x gtceu:ender_eye_dust')
        .itemOutputs('64x kubejs:reactive_dust_mixture')
        .duration(4800)
        .EUt(GTValues.VHA[GTValues.UHV])

    event.recipes.gtceu.large_chemical_reactor('literal_alchemy')
        .itemInputs('3x kubejs:reactive_dust_mixture')
        .notConsumable('extendedcrafting:ultimate_catalyst')
        .inputFluids('gtceu:chlorine_triflouride 200', 'kubejs:molten_primal_mana 150', 'gtceu:dragon_breath 100')
        .itemOutputs('2x kubejs:inert_dust_mixture')
        .outputFluids('gtceu:waste_gas_mixture 1000')
        .duration(15)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.sifter('inert_dust_mixture_sifting')
        .itemInputs('2x kubejs:inert_dust_mixture')
        .itemOutputs('1x kubejs:dusty_inert_powder', '1x kubejs:inert_clumps')
        .chancedOutput('gtceu:monazite_gem', 3500, 1000)
        .chancedOutput('kubejs:impure_ancient_debris_dust', 750, 300)
        .chancedOutput('extendedcrafting:crystaltine_nugget', 450, 450)
        .duration(320)
        .EUt(GTValues.VA[GTValues.IV])

    // Shiny metal powder half

    event.recipes.gtceu.large_chemical_reactor('inert_powder_reacting')
        .itemInputs('1x kubejs:dusty_inert_powder', 'gtceu:omnic_acid_dust')
        .inputFluids('minecraft:water 1000', 'gtceu:enriched_naquadah 144')
        .itemOutputs('kubejs:shiny_powder_mixture')
        .chancedOutput('kubejs:cryotheum_dust', 1000, 100)
        .chancedOutput('kubejs:pyrotheum_dust', 1000, 100)
        .outputFluids('gtceu:diluted_hydrochloric_acid 900', 'gtceu:depleted_uranium_hexafluoride 100')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.centrifuge('shiny_powder_mixture_centrifuging')
        .itemInputs('5x kubejs:shiny_powder_mixture')
        .itemOutputs('kubejs:shiny_metal_powder', 'kubejs:dusty_inert_powder', 'gtceu:crystal_matrix_dust')
        .chancedOutput('kubejs:aerotheum_dust', 1000, 100)
        .chancedOutput('kubejs:petrotheum_dust', 1000, 100)
        .duration(500)
        .EUt(GTValues.VHA[GTValues.EV])

    //Eltic actinate clump half
    event.recipes.gtceu.chemical_bath('inert_clump_bath')
        .itemInputs('4x kubejs:inert_clumps')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('kubejs:clean_inert_cluster')
        .outputFluids('gtceu:saturated_water 100')
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.electromagnetic_separator('clean_cluster_separating')
        .itemInputs('kubejs:clean_inert_cluster')
        .chancedOutput('kubejs:eltic_crystal_seed', 2700, 500)
        .chancedOutput('kubejs:dusty_inert_powder', 500, 150)
        .duration(2500)
        .EUt(GTValues.VA[GTValues.LuV])

    // Converge here
    event.recipes.gtceu.autoclave('eltic_actinide_crystal_growing')
        .itemInputs('kubejs:eltic_crystal_seed', '2x kubejs:shiny_metal_powder')
        .inputFluids('gtceu:saturated_water 500')
        .itemOutputs('gtceu:eltic_actinate_gem')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.electric_blast_furnace('eltz_ingot_blasting')
        .itemInputs('gtceu:flawless_eltic_actinate_gem', '8x #forge:dusts/pulsating_alloy')
        .itemOutputs('1x gtceu:eltz_ingot', '4x gtceu:actinium_iron_oxide_dust')
        .duration(1540)
        .blastFurnaceTemp(13600)
        .EUt(GTValues.VA[GTValues.UEV])

})