# install method
1. https://wordpress.org/download
2. download package
3. visit http://localhost/wordpress/wp-admin/setup-config.php
4. set db config
- wp_sample_config.php
* db name: my_wp_db
* user name: root
* pwd: ''

`for test` 
* make _dbtest.php in project root
```
	<?php

	$mysqli = new mysqli('localhost', 'root', '', 'my_wp_db');

	if ($mysqli->connect_error) {
	    die('Connection error: ' . $mysqli->connect_error);
	}
	echo '✅ Connected successfully to the database!';

	?>
```
and run

---
5. set admin info
* usertitle: test-wp
* user name: admin
* pwd: 9%V6gHWPyixEfYtHT!
* email: kevin1220-333@outlook.com

-------------- Done --------------------------------

install plugin: WpStream -> email(kevin1220-333@outlook.com), pwd(hello world325)



But Get Error.

------ 
# new method:  !important  wordpress project..


option A: https://localwp.com/
option B: Use this if you want to test WpStream on a real server:
	1. Create free account
	2. Upload your WordPress files
	3. Install WpStream plugin
	4. Now WpStream Quick Start or Settings will work
		  https://infinityfree.net (Free, supports PHP + SSL)
		  https://www.000webhost.com



- I was Selected Option A

1. download
2. sigin up
	userinfo: name: kevin, pwd: kevin, email: kevin1220-333@outlook.com
	
	if get error:
	win + r / run this row
		wp option update siteurl http://localhost:10005
		wp option update home http://localhost:10005

add plugin WpStream  kevin1220-333@outlook.com   pwd: kevin1220-333


sorry.. why localWP is only for developing.. but I want domain service on VPS.. so.. false..
So.. I retry with XAMPP

---
username: kevin
pwd: kevin1220-333
email: kevin1220-333@outlook.com


install OBS setup: https://obsproject.com/welcome  (download & install)


* make new plugin folder and then make new plugin file and activate plugin in wp-admin
* make new test page
* pay system vote(select) WooCommerce
* install woocommerce plugin and activate and then register





- install login page plugin
- mgn user, register function
- install wpstream theme
- install wpstream
- install ppv-live-webcams
- add folder (unified live chat)
- install woocommerce plugin




✅ 1. 결제 시스템과의 연동 가능성

| 기능                    | **WpStream**            | **PPV Live Webcams**             |
| --------------------    | ------------------      |  -------------------------------- |
| **WooCommerce 연동**    | ✅ 공식 지원             | ✅ 공식 지원                          |
| **기타 결제 게이트웨이** | WooCommerce를 통해 가능   | WooCommerce 기반 + 자체 지불 방식도 일부 있음 |
| **1회 결제 / 구독**     | 둘 다 가능 (상품 설정)    | 둘 다 가능 (채팅/스트리밍 별 과금 가능)         |
| **구현 난이도**         | 보통 (Woo 기반)           | 중간 이상 (추가 설정 많음)                 |

🔹 결론: 두 플러그인 모두 WooCommerce와 연동되어 결제 기능 구현이 가능합니다. 다만, PPV Live Webcams는 사용자가 직접 방송 중에 결제를 유도하는 구조(예: 채팅, 토큰 기반 결제 등)에 좀 더 최적화되어 있음.


✅ 2. 백엔드 기능 비교 (관리자 및 서버 제어 측면)

| 항목                       | **WpStream**                   | **PPV Live Webcams** |
| -----------------          | ----------------------        | -------------------- |
| **스트림 관리**             | 강력한 Live/VOD 제어           | 방송자별 룸 기반 채널 시스템     |
| **권한 제어 및 접근 통제**  | WooCommerce 상품으로 제어       | 더 세분화된 룸 설정 가능       |
| **통합성**                 | 깔끔하고 표준적인 Woo 기반       | 커스터마이징 필요 많음         |
| **개발자 친화성**          | 문서화 우수, REST API 사용 가능  | 복잡하고 문서가 제한적         |

🔹 결론:
백엔드 개발을 생각한다면 WpStream이 더 단순하고 정돈된 방식으로 관리 가능합니다.
반면, PPV Live Webcams는 기능이 더 많지만 구현 난이도와 구조 파악이 더 어렵습니다.


✅ 3. 프론트엔드 기능 비교 (UI/UX 구현 측면)

| 항목                      | **WpStream**                 | **PPV Live Webcams**           |
| --------------            | ---------------              | ------------------------------ |
| **기본 UI/스타일**         | 미니멀한 스트리밍 중심 UI      | 전형적인 성인 방송 스타일 UI (많은 컴포넌트 포함) |
| **사용자 인터랙션**        | 단순 시청 (라이브/VOD)        | 채팅, 방송자 팁, 채널 전환 등 다기능         |
| **커스터마이징 난이도**    | 쉬움 (짧은 템플릿/스타일)     | 어려움 (복잡한 레이아웃 구조)              |
| **모바일 대응성**          | 좋음                         | 일부 페이지 제한 있음                   |




---------------------------------------
✅ 플러그인 통합 개발의 전체 전략 로드맵
🚩 1단계: 핵심 기능 정의 (스펙 명세서 작성)
⬇️ 주요 기능 정리
| 분류       | 기능                        | 출처 플러그인          |
| -------- | ------------------------- | ---------------- |
| 스트리밍     | 방송자용 라이브 송출 / 시청자용 스트리밍   | WpStream         |
| 접근 제어    | WooCommerce 상품 구매자만 시청 가능 | WpStream         |
| 채팅 기능    | 라이브 방송 중 실시간 채팅           | PPV Live Webcams |
| 방송자 룸 기능 | 방송자가 자기 방을 생성/관리          | PPV Live Webcams |
| 결제 기능    | 방송자에게 팁, 시간당 요금           | PPV Live Webcams |
| UX/UI 구성 | 반응형 스트리밍 페이지 + 팝업/채팅창     | 둘 다 조합           |


🚩 2단계: 코드 구조 분해 및 재구성 (Core 분리)
- 두 플러그인은 서로 다른 구조를 가지고 있기 때문에:

* WpStream: WooCommerce 기반 REST 방식 + 쇼트코드
* PPV: 많은 레거시 PHP, iframe 기반, 자체 구조

- 🛠️ 따라서 다음을 진행해야 합니다:

* WpStream의 비디오 플레이어 코드만 추출
* PPV의 채팅 기능, 룸 관리 기능만 따로 분리
* 모든 shortcode와 AJAX 함수들을 네임스페이스/클래스로 정리

🚩 3단계: UI/UX 레이아웃 통합 (프론트엔드 작업)
통합된 플러그인은 단일 방송 페이지에서 다음 기능을 모두 보여주어야 합니다:
| 구성  | 요소                                |
| --- | --------------------------------- |
| 상단  | 방송 제목, 방송자 정보                     |
| 좌측  | 비디오 스트리밍 (WpStream 플레이어)          |
| 우측  | 실시간 채팅 (PPV의 AJAX 채팅)             |
| 하단  | "구매", "팁 보내기", "타이머 보기" 등 인터랙션 버튼 |
| 비회원 | 상품 구매 유도 or 로그인 페이지 연결            |

📦 기본적으로 React/Vue 없이 WordPress 내의 PHP + jQuery로 구성 가능하지만,
원하면 React + REST API 기반으로 현대식 SPA 스타일로도 만들 수 있습니다.


🚩 4단계: 결제/접근 제어 통합
가장 중요한 부분은 결제와 접근 제한입니다.
* 상품 구매 후만 스트리밍/채팅이 가능하도록 제어 (current_user_can_view_stream($product_id) 같은 함수)
* WooCommerce hooks (woocommerce_order_status_completed, woocommerce_before_my_account) 사용

또한, 방송자마다 다른 가격 책정, 구독제 설정을 구현할 수도 있습니다.


🚩 5단계: 방송자별 룸 관리
PPV Webcams는 사용자마다 "방" 개념이 있어서,

* /live/room/[user_id] 같은 고유 주소를 생성하고
* wp_users나 custom post type으로 방송자 룸을 자동 생성할 수 있습니다.

🧱 이를 새 플러그인에서는 아래와 같이 구성:
function create_broadcast_room_for_user($user_id) {
    if (!get_page_by_path("room-$user_id")) {
        // Create new WP Page or Custom Post
    }
}


✅ 개발 언어 및 기술 스택 제안
| 영역     | 기술                                  |
| ------ | ----------------------------------- |
| 백엔드    | PHP (WordPress 표준), WooCommerce API |
| 프론트엔드  | jQuery 또는 React (선택)                |
| 데이터 저장 | WP Option + Custom Post Type        |
| 스트리밍   | WpStream iframe 또는 embed code       |
| 실시간 채팅 | AJAX 또는 WebSocket (선택)              |
| 보안     | Capability / Nonce / 인증 체크          |



====================================================================
 우에 반영된 순차와 구체적인 내용들을 열쇠단어로 하여 gpt검색을 진행할것.
====================================================================

✅ 다음 진행 방향 제안   (이런 기능들을 구체적으로 구현하여 환심을 살것.)
Step 1: 방송자와 시청자 구분 구조 정의 + 페이지 흐름
Step 2: 스트리밍 UI 연결 (WpStream embed 정상 작동 확인)
Step 3: 채팅 기능 삽입 및 사용자별 룸 라우팅 구현
Step 4: 결제 통제 및 WooCommerce 연동
Step 5: 디자인 개선 및 테스트