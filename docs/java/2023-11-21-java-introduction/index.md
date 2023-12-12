---
sidebar_position: 1
id: java-introduction
title: Giới thiệu ngôn ngữ Java
tags:
  - Java
slug: /gioi-thieu-java
last_update:
  date: 11/22/2023
  author: Minh Duong
---

**_Truớc khi đi vào chi tiết về ngôn ngữ lập trình Java thì mình sẽ giới thiệu sơ lược về ngôn ngữ lập trình Java_**

## Java là gì ?

Java là một trong những ngôn ngữ lập trình hướng đối tượng và được sử dụng để hướng tới các lập trình viên viết ứng dụng **"write one, run anywhere (WORA)"** (viết một lần, chạy mọi nơi), nghĩa là đoạn code Java sau khi được biên dịch có thể chạy được trên tất cả các nền tảng (platform) hỗ trợ Java mà không cần phải được biên dịch lại.

Java được khởi sướng bởi James Gosling và bạn đồng nghiệp ở Sun MicroSystem năm 1991. Ban đầu Java được tạo ra nhằm mục đích viết phần mềm cho các sản phẩm gia dụng, và có tên là Oak. Tuy nhiên, khi ngôn ngữ Java phát triển sau này thì được ứng dụng phục vụ cho nhiều mục đích khác nhau như phát triển phần mềm, web, trò chơi di động, các ứng dụng trên thiết bị di động,...

Java được phát hành lần đầu tiền vào năm 1995 và đến khoảng năm 2010 được Oracle mua lại từ Sun MicroSystem. Ngay sau khi phát hành, ngôn ngữ này đã trở thành ngôn ngữ lập trình phổ biến nhất trên thế giới trong một thời gian ngắn và duy trì đến gần những năm 2020. Đến năm 2022, theo bảng xếp hạng ngôn ngữ lập trình của trang Github, ngôn ngữ Java đã tụt hạng xuống vị trí thứ 3 về mức độ phổ biến. Tính đến tháng 10 năm 2023, ngôn ngữ Java tụt xuống vị trí thứ 4 về mức độ phổ biến tính theo chỉ số TIOBE (Chỉ số cộng đồng lập trình, theo trang TIOBE).

- [TIOBE Index for November 2023](https://www.tiobe.com/tiobe-index/)
- [JAVA Wiki](<https://en.wikipedia.org/wiki/Java_(programming_language)> "Java (programming language)")

## Đặc điểm ngôn ngữ Java ?

### Hướng đối tượng

So với ngôn ngữ C++ thì Java là ngôn ngữ lập trình hướng đến đối tượng hoàn toàn. Tất cả mọi thứ đề cập trong Java đều liên quan đến đối tượng được định nghĩa trước, thậm chí hàm chính (hàm main) của một chương trình viết bằng ngôn ngữ Java cũng phải đặt trong một lớp (class). Hướng đối tượng trong ngôn ngữ Java không hỗ trợ tính đa kế thừa (Multi-Inheritance) như trong ngôn ngữ C++ mà thay vào đó, Java đưa ra khái niệm interfaces để hỗ trợ tính đa kế thừa

### Đa nền tảng

Một chương trình viết bằng ngôn ngữ Java có thể chạy tốt ở nhiều môi trường khác nhau, thông thường được gọi là khả năng đa nền tảng (cross-platform). Khả năng đa nền tảng được thể hiện thông qua nhiều hệ điều hành khác nhau như Windows, Unix, Linux,.... với điều kiện hệ điều hành đó có cài đặt máy ảo Java (Java Virtual Machine - JVM). Khả năng đa nền tảng được thể hiện ở 2 cấp độ là cấp độ mã nguồn và cấp độ nhị phân.

Ở cấp độ mã nguồn: Kiểu dữ liệu trong Java nhất quán cho tất cả các hệ điều hành và phần cứng khác nhau. Java có riêng một bộ thư viện để hỗ trợ vấn đề này. Chương trình viết bằng ngôn ngữ Java có thể biên dịch trên nhiều loại máy khác nhau mà không gặp lỗi.

Ở cấp độ nhị phân: Một mã biên dịch có thể chạy trên nhiều nền tảng khác nhau mà không cần dịch lại mã nguồn. Tuy nhiên cần có Java Virtual Machine để thông dịch đoạn mã này.

### Thông dịch

Ngôn ngữ Java thuộc loại ngôn ngữ thông dịch, chính xác hơn là vừa thông dịch và biên dịch. Cụ thể như sau

<p align="center">
<img src={require('./java.jpg').default} width={800} alt="Quy trình thông dịch và biên dịch ngôn ngữ Java"/>
</p>
<p align="right">Nguồn: GeekForGeeks</p>

Khi viết mã, hệ thống tạo ra một tệp .java. Khi biên dịch mã nguồn của chương trình sẽ được biên dịch ra mã byte code với tệp là .class. Máy ảo Java (Java Virtual Machine) sẽ thông dịch mã byte code này thành machine code  (hay native code) khi nhận được yêu cầu chạy chương trình.

Khi hệ thống thực hiện chạy các đoạn mã Java được nêu như trên thì sẽ có ưu điểm và nhược điểm.

- Ưu điểm: Phương pháp này giúp các đoạn mã viết bằng Java có thể chạy được trên nhiều nền tảng khác nhau. Với điều kiện là JVM có hỗ trợ chạy trên nền tảng này.
- Nhược điểm: Cũng như các ngôn ngữ thông dịch khác, quá trình chạy các đoạn mã Java là chậm hơn các ngôn ngữ biên dịch khác (tuy nhiên vẫn ở trong một mức chấp nhận được).

### Đa nhiệm - Đa luồng (MultiTasking - MultiThreading)

Java hỗ trợ lập trình đa nhiệm - đa luồng để thực thi các công việc đồng thời một lúc. Đồng thời cũng cung cấp giải pháp đồng bộ giữa các tiến trình với nhau.

Đa nhiệm (MultiTasking) là khả năng CPU thực hiện nhiều tác vụ cùng một lúc. Sẽ có sự chuyển đổi ngữ cảnh liên tục của CPU giữa các tác vụ nhanh chóng và do đó mang lại hiệu suất tốt hơn. CPU cộng tác giữa những người dùng với nhau và thực hiện nhiều tác vụ một cách hiệu quả. Sự khác biệt chính giữa đa nhiệm và đa luồng là ở chỗ, trong đa nhiệm, mỗi tiến trình có một tài nguyên và bộ nhớ khác nhau và không có sự chia sẻ qua lại lẫn nhau.

Tính đa nhiệm trong ngôn ngữ Java có 2 loại:

- Đa nhiệm dựa trên quy trình: Java thực hiện nhiều hơn 1 quy trình khi chạy đồng thời cùng một lúc. Ví dụ như thực thi bảng tính excel trong khi chạy trình xử lý văn bản word.
- Đa nhiệm dựa trên luồng: Java thực thi hơn đồng thời hơn 1 luồng cùng lúc. Một thread thực hiện các phần khác nhau của một chương trình. Ví dụ: Định dạng văn bản trong trình xử lý văn bản và in ra cùng một lúc. Mặc dù mỗi luồng có đường dẫn thực thi (execution path) khác nhau cho cùng một tiến trình nhưng tất cả các luồng đều chia sẻ cùng một tài nguyên và bộ nhớ. 

Đa luồng (MultiThreading) là công nghệ Java cho phép nhiều phần của chương trình thực hiện đồng thời cùng một lúc. Điều này dẫn đến việc chương trình sẽ sử dụng CPU tối đa. Chúng ta cũng có thể gọi nó là đồng thời vì nó thực thi đồng thời hai hoặc nhiều luồng cùng lúc. Trong quá trình đa luồng, các luồng chạy song song và dễ dàng chuyển đổi giữa các luồng. Đa luồng tiết kiệm bộ nhớ vì nó không phân bổ bộ nhớ riêng cho từng luồng.

Đa luồng trong Java có ưu điểm như sau:

- Mỗi luồng là độc lập và do đó nếu có trường hợp ngoại lệ xảy ra trong một luồng thì nó sẽ không ảnh hưởng đến luồng khác.
- Thực hiện nhiều nhiệm vụ cùng một lúc và do đó tiết kiệm thời gian
- Vì các luồng độc lập nên nó không chặn người dùng và có thể thực hiện nhiều thao tác cùng lúc
- Tiết kiệm bộ nhớ vì nhiều luồng không phân bổ bộ nhớ riêng
- Sử dụng CPU tối đa
- Khả năng phản hồi tốt hơn và cung cấp trải nghiệm người dùng tốt hơn

### Khả chuyển (Portable)

Tính năng này được thể hiện bởi ngôn ngữ Java có thể thực thi các ứng dụng của nó trong tất cả các hệ điều hành và phần cứng khác nhau

### Hiệu suất cao

Lập trình bằng ngôn ngữ Java sẽ hạn chế tối đa các tình huống bị lỗi bằng quá trình kiểm tra lỗi ngay tại thời điểm biên dịch và tại runtime.

### An toàn và bảo mật

Tính an toàn của ngôn ngữ Java được thể hiện như sau:

- Ngôn ngữ lập trình Java yêu cầu chặt chẽ về kiểu dữ liệu.
- Dữ liệu phải được khai báo tường minh.
- Không sử dụng con trỏ và các phép toán với con trỏ.
- Java kiểm soát chặt chẽ việc truy nhập đến mảng, chuỗi, không cho phép sử dụng các kỹ thuật tràn. Do đó các truy nhập sẽ không vượt quá kích thước của mảng hoặc chuỗi.
- Quá trình cấp phát và giải phóng bộ nhớ được thực hiện tự động.
- Cơ chế xử lý lỗi giúp việc xử lý và phục hồi lỗi dễ dàng hơn.

Tính bảo mật của ngôn ngữ Java được thể hiện qua các mức như sau:

- Mức 1: Chỉ có thể truy xuất dữ liệu cũng như phương phức thông qua giao diện mà lớp cung cấp.
- Mức 2: Trình biên dịch kiểm soát các đoạn mã sao cho tuân thủ các quy tắc của ngôn ngữ lập trình Java trước khi thông dịch.
- Mức 3: Trình thông dịch sẽ kiểm tra mã byte code xem các đoạn mã này có đảm bảo được các quy định, quy tắc trước khi thực thi.
- Mức 4: Java kiểm soát việc nạp các lớp vào bộ nhớ để giám sát việc vi phạm giới hạn truy xuất trước khi nạp vào hệ thống.

## Kiến trúc và môi trường của Java

### Máy ảo Java (Java Virtual Machine - JVM)

JVM - Java Virtual Machine là một trình thông dịch của Java. JVM cung cấp môi trường để code Java được thực thi. Trong quá trình biên dịch, chương trình Java sẽ tạo ra các file *.class chứa các Byte code. Các file *.class sẽ được máy ảo Java thực hiện chuyển các byte code thành mã máy tương ứng với từng hệ điều hành và phần cứng khác nhau. Máy ảo Java thực hiện các công việc sau:

1. Loads code: Tải mã
2. Verifies code: Kiểm tra mã
3. Executes code: Thực thi mã
4. Provides runtime environment: Tạo môi trường biên dịch mã.

<p align="center">
<img src={require('./java.jpg').default} width={800} alt="Quy trình thông dịch và biên dịch ngôn ngữ Java"/>
</p>
<p align="right">Nguồn: GeekForGeeks</p>

### Môi trường thực thi Java (Java Runtime Environment - JRE)

Môi trường thực thi Java được thiết kế để hỗ trợ việc chạy các chương trình phần mềm. Chúng đảm bảo việc kết nối tới bộ nhớ và các tài nguyên hệ thống khác để chạy các chương trình. Trong quá khứ, hầu hết các phần mềm đều sử dụng hệ điều hành (OS) giống như môi trường thực thi của chúng.

Với Java chúng ta có JRE như là một runtime environment, nó gồm có các Java class libraries, Java class loader, và Java Vitrual Machine:

- **Java class loader** chịu trách nhiệm nạp các classes và kết nối chúng với các thư viện Java (java libraries)
- **Java virtual machine(JVM)** chịu trách nhiệm đảm bảo ứng dụng Java có đủ tài nguyên để chúng thực thi tốt trong thiết bị hoặc môi trường đám mây

Nhìn chung, JRE đảm bảo chương trình Java có thể chạy trên hầu hết các hề điều hành mà không cần sửa đổi. Nó còn cung cấp những dịch vụ giá trị, ví dụ như quản lý bộ nhớ tự động (Automatic Memory Management) là một trong những dịch vụ quan trọng nhất của JRE, nó giúp các lập trình viện trong việc cấp phát cũng như giải phóng bộ nhớ tự động.

### Bộ phát triển Java (Java Development Kit - JDK)

Java Development Kit là một trong ba thành phần cốt lõi của lập trình Java. JDK là một hệ tiêu chuẩn trong quá trình triển khai nền tảng Java bao gồm các trình thông dịch và thư viện lớp. Hiểu theo cách đơn giản, JDK sẽ là gói phần mềm mà bạn tải xuống để tạo ra các ứng dụng dựa trên Java. JDK cho phép các lập trình viên tạo ra các Java, sau đó các chương trình này sẽ được JVM và JRE xử lý và chạy.

<p align="center">
<img src={require('./jdk.jpg').default} width={800} alt="Quy trình thông dịch và biên dịch ngôn ngữ Java"/>
</p>
<p align="right">Nguồn: GeekForGeeks</p>

## Ưu nhược điểm ngôn ngữ Java

Ưu điểm:
- Java là ngôn ngữ độc lập bởi Java có thể chạy trên bất kỳ máy nào mà không cần cài đặt bất kỳ một phần mềm đặc biệt nào. Với đặc tính không sử dụng con trỏ, Java sẽ được bảo mật tuyệt đối và được coi là một ngôn ngữ an toàn.
- Có thể thực thi đồng thời nhiều chương trình nên có thể thực hiện đa luồng (Multi-Threading).
- Java có rất nhiều tính năng như thu gom rác, xử lý ngoại lệ và không sử dụng con trỏ, quản lý bộ nhớ hiệu quả.
- Java là một ngôn ngữ lập trình cấp cao, dễ hiểu.

Nhược điểm:
- Là một ngôn ngữ cấp cao nên Java sẽ phải xử lý nhiều cấp độ biên dịch và trừu tượng của một máy ảo.
- Java có hiệu xuất kém bởi các trường hợp cấu hình bộ nhớ đệm, bộ thu gom rác không hợp lệ và bế tắc giữa các quy trình với nhau.
- Java có rất ít trình tạo SWT, JSF, GUI và JavaFX so với những trình xây dựng phổ biến hơn.
- Trong một số trường hợp, lập trình viên sẽ phải viết những mã dài, phức tạp, điều này có thể ảnh hưởng đến khả năng đọc của mã.

## Sự khác biệt giữa Java và C++

Java và C++ có sự khác biệt như sau

||C++|Java|
|---|---|----|
|Loại ngôn ngữ|Là ngôn ngữ lập trình thủ tục và hướng đối tượng| Là ngôn ngữ lập trình hướng đối tượng|
|Cấp bậc| Ngôn ngữ bậc trung và là một phần mở rộng của ngôn ngữ C| Ngôn ngữ bậc cao |
|Mục tiêu| Để lập trình hệ thống và ứng dụng| Để thông dịch cho các hệ thống in, sau đó được phát triển như một máy tính mạng hỗ trợ|
|Nền tảng độc lập| Phụ thuộc vào nền tảng, "Write Once, Compile Anywhere" - Viết một lần, biên dịch ở mọi nơi | Độc lập với nền tảng, "Write Once Run Anywhere" - Viết một lần chạy mọi nơi|
|Trình biên dịch và thông dịch| Chỉ hỗ trợ trình biên dịch | Hỗ trợ cả 2|
|Tính linh động| Phụ thuộc vào nền tảng | Chạy trong mọi hệ điều hành với điều kiện hệ điều hành có hỗ trợ máy ảo Java |
|Khả năng tương thích với các ngôn ngữ khác| Không có khả năng tương thích với các ngôn ngữ trước đó | Tương thích với mã nguồn C |
|Tương tác với phần cứng | Có tương tác | Không tương tác |
|Quản lý hệ thống | Lập trình viên đảm nhiệm vai trò này | Hệ thống tự kiểm soát |
|Phát hiện lỗi | Hệ thống kiểm tra | Lập trình viên kiểm tra |
|Hỗ trợ con trỏ | Có hỗ trợ | Không hỗ trợ |
|Hỗ trợ phân luồng | Không hỗ trợ | Có hỗ trợ |
|Hỗ trợ nạp chồng phương thức | Không hỗ trợ | Có hỗ trợ |
|Gọi biến theo giá trị và tham chiếu| Hỗ trợ cả 2 | Chỉ hỗ trợ gọi theo giá trị |

## Ứng dụng của Java

Ngôn ngữ Java được sử dụng để:

- Phát triển ứng dụng Android, các phần mềm doanh nghiệp, các trò chơi điện tử
- Ứng dụng trong khoa học dữ liệu, điện toán đám mây, phân tích dữ liệu lớn (Big Data), trí tuệ nhân tạo, internet vạn vật (IoT)
- Lập trình công nghệ cho các máy chủ như Apache, JBoss, GlassFish,....