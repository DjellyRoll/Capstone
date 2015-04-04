var treeData = [
    {
        "name": "Do I have the right ingredients?",
        "parent": "null",
        "children":
            [
                {        
                    "name": "Purchase Ingredients.",
                    "parent": "Do I have the right ingredients?"
                },
                {        
                    "name": "Do I have the right tools?",
                    "parent": "Do I have the right ingredients?",
                    "children":[
                        {
                            "name": "Get an oven",
                            "parent": "Do I have the right tools?"
                        },
                        {
                            "name": "Purchase baking tools.",
                            "parent": "Do I have the right tools?"
                        },
                        {
                            "name": "Grease cake pan",
                            "parent": "Do I have the right tools?",
                            "children":[
                                        {
                                            "name": "Preheat oven",
                                            "parent": "Grease cake pan",
                                            "children":[
                                                        {
                                                            "name": "Mix ingredients",
                                                            "parent": "Preheat oven",
                                                            "children":[
                                                                        {
                                                                            "name": "Bake Cake",
                                                                            "parent": "Mix ingredients"
                                                                        }
                                                            ]
                                                        }
                                            ]
                                        }
                                     ]
                        }
                    ]
                }
            ]
    }
]
;
