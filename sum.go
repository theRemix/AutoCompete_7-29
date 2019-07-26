package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	sum := 0
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		i, _ := strconv.Atoi(scanner.Text())
		sum = sum + i
	}

	if err := scanner.Err(); err != nil {
		log.Println(err)
	}

	fmt.Printf("%v", sum)
}
