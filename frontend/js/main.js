mainColor = "#A6979C";

fetch("/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Full data:",data); // This will log the JSON data to the console
    // Group by 'score' and count the records
    const groupedDataByScore = data.reduce((acc, obj) => {
      const key = obj.Score;
      if (!acc[key]) {
        acc[key] = { Score: key, Count: 0 };
      }
      acc[key].Count++;
      return acc;
    }, {});

    // Convert the grouped data back to an array of objects
    const groupByScoreResult = Object.values(groupedDataByScore);
    drawHorizontalBarChart("#score-chart", groupByScoreResult, "Score", "Count");

    // Output the result
    console.log("Group by score:",groupByScoreResult);

    // Group by 'score' and count the records
    const groupedDataByRobertaLabel = data.reduce((acc, obj) => {
        const key = obj.roberta_label;
        if (!acc[key]) {
          acc[key] = { roberta_label: key, Count: 0 };
        }
        acc[key].Count++;
        return acc;
      }, {});
  
      // Convert the grouped data back to an array of objects
      const groupByScoreRobertaLabel = Object.values(groupedDataByRobertaLabel);
      drawHorizontalBarChart("#roberta-chart", groupByScoreRobertaLabel, "roberta_label", "Count");

      // Output the result
      console.log("Group by roberta label:",groupByScoreRobertaLabel);

      // Group by 'score' and count the records
    const groupedDataByVaderLabel = data.reduce((acc, obj) => {
        const key = obj.vader_label;
        if (!acc[key]) {
          acc[key] = { vader_label: key, Count: 0 };
        }
        acc[key].Count++;
        return acc;
      }, {});
  
      // Convert the grouped data back to an array of objects
      const groupByScoreVaderLabel = Object.values(groupedDataByVaderLabel);
      drawHorizontalBarChart("#vader-chart", groupByScoreVaderLabel, "vader_label", "Count");
  
      // Output the result
      console.log("Group by vader label:",groupByScoreVaderLabel);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
